import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';

import API, { graphqlOperation } from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';
import amplify from 'amplify';
import { getBlockNumber } from 'contracts/erc721A';

Amplify.configure(amplify.config);

export default function CurrentBlock() {
  const [loading, setLoading] = useState<boolean>(true);
  const [startBlockNumber, setStartBlockNumber] = useState<number>(0);

  useEffect(() => {
    async function getBlock() {
      const number = await getBlockNumber();
      setStartBlockNumber(number);
      setLoading(false);
    }

    getBlock();
  }, []);

  useEffect(() => {
    const { subscribeDoc, channel } = amplify;

    const subscription: any = API.graphql(
      graphqlOperation(subscribeDoc, { name: channel }),
    );

    const sub = subscription.subscribe({
      next: (payload: any) => {
        try {
          const { blockNumber } = JSON.parse(payload.value.data.subscribe.data);
          setStartBlockNumber(blockNumber);
        } catch (error) {
          return error;
        }
      },
    });

    return () => {
      sub.unsubscribe();
    };
  }, [startBlockNumber]);

  return (
    <>
      <div className="text-violet-300 mb-2">CURRENT BLOCK</div>
      <div className="flex justify-center mb-4">
        <svg
          className="w-8 h-8 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        {loading ? (
          <Loading />
        ) : (
          <div className="text-xl text-violet-400 font-extrabold animate-pulse">
            # {startBlockNumber}
          </div>
        )}
      </div>
    </>
  );
}

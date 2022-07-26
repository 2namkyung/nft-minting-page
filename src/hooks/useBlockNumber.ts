import { getBlockNumber } from 'contracts/erc721A';
import React, { useEffect, useState } from 'react';
import { wsProvider } from 'utils/ethers';

const useBlockNumber = () => {
  const [blockNumber, setBlockNumber] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const number = await getBlockNumber();
      setBlockNumber(number);
    })();
  }, []);

  useEffect(() => {
    wsProvider.on('block', (number) => {
      setBlockNumber(number);
    });

    return () => {
      wsProvider.off('block', () => {
        console.log('off');
      });
    };
  }, [blockNumber]);

  return blockNumber;
};

export default useBlockNumber;

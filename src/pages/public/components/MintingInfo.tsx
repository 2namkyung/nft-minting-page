import BlockInfoHeader from 'components/BlockInfoHeader';
import BlockInfoLink from 'components/BlockInfoLink';
import CurrentBlock from 'components/CurrentBlock';
import MintingStartAt from 'components/MintingStartAt';
import { getMintStartBlock } from 'contracts/contract';
import useBlockNumber from 'hooks/useBlockNumber';
import { useEffect, useState } from 'react';

function MintingInfo() {
  const blockNumber = useBlockNumber();

  const [startBlockNumber, setStartBlockNumber] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const startBlock = await getMintStartBlock();
      setStartBlockNumber(Number(startBlock));
    })();
  }, []);

  return (
    <div className="w-full m-auto lg:w-2/5 lg:border-r-2 pr-3 text-center">
      <BlockInfoHeader title="PUBLIC SALE" />
      <CurrentBlock blockNumber={blockNumber} />
      <MintingStartAt startBlockNumber={startBlockNumber} />
      <BlockInfoLink
        openseaLink="https://testnets.opensea.io/collection/fs-test"
        etherscanLink="https://rinkeby.etherscan.io/address/0xC7E7CA420BA1acada6Fc46fDAb1988273530B081"
      />
    </div>
  );
}

export default MintingInfo;

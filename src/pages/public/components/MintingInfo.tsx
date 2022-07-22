import BlockInfoHeader from 'components/BlockInfoHeader';
import BlockInfoLink from 'components/BlockInfoLink';
import CurrentBlock from 'components/CurrentBlock';
import MintingStartAt from 'components/MintingStartAt';
import { getStartBlockNumber } from 'contracts/contract';
import useBlockNumber from 'hooks/useBlockNumber';
import { useEffect, useState } from 'react';

function BlockInfo() {
  const blockNumber = useBlockNumber();

  const [startBlockNumber, setStartBlockNumber] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const number = await getStartBlockNumber();
      setStartBlockNumber(Number(number));
    })();
  }, []);

  return (
    <div className="w-full m-auto lg:w-2/5 lg:border-r-2 pr-3 text-center">
      <BlockInfoHeader title="PUBLIC SALE" />
      <CurrentBlock blockNumber={blockNumber} />
      <MintingStartAt startBlockNumber={startBlockNumber} />
      <BlockInfoLink
        openseaLink="https://testnets.opensea.io/collection/pfp-3uauofckhx"
        etherscanLink="https://rinkeby.etherscan.io/address/0x8172aF0CD32A9b781abF5292833a83773B43B301"
      />
    </div>
  );
}

export default BlockInfo;

import BlockInfoHeader from 'components/BlockInfoHeader';
import BlockInfoLink from 'components/BlockInfoLink';
import CurrentBlock from 'components/CurrentBlock';
import MintingStartAt from 'components/MintingStartAt';

import useBlockNumber from 'hooks/useBlockNumber';

function PublicMintingInfo() {
  const blockNumber = useBlockNumber();

  return (
    <div className="w-full m-auto lg:w-2/5 lg:border-r-2 pr-3 text-center">
      <BlockInfoHeader title="PUBLIC SALE" />
      <CurrentBlock blockNumber={blockNumber} />
      <MintingStartAt startBlockNumber={7777} />
      <BlockInfoLink
        openseaLink="https://testnets.opensea.io/collection/fs-test"
        etherscanLink="https://rinkeby.etherscan.io/address/0xC7E7CA420BA1acada6Fc46fDAb1988273530B081"
      />
    </div>
  );
}

export default PublicMintingInfo;

import BlockInfoHeader from 'components/BlockInfoHeader';
import BlockInfoLink from 'components/BlockInfoLink';
import CurrentBlock from 'components/CurrentBlock';
import MintingStartAt from 'components/MintingStartAt';
import useBlockNumber from 'hooks/useBlockNumber';

const MintingInfo = () => {
  const blockNumber = useBlockNumber();

  return (
    <div className="w-full m-auto lg:w-2/5 lg:border-r-2 pr-3 text-center">
      <BlockInfoHeader title="PRIVATE SALE" />
      <CurrentBlock blockNumber={blockNumber} />
      <MintingStartAt startBlockNumber={12345678} />
      <BlockInfoLink
        openseaLink="https://testnets.opensea.io/collection/pfp-3uauofckhx"
        etherscanLink="https://rinkeby.etherscan.io/address/0x8172aF0CD32A9b781abF5292833a83773B43B301"
      />
    </div>
  );
};

export default MintingInfo;

import Minting from './components/Minting';
import MintingInfo from './components/MintingInfo';

const Private = () => {
  return (
    <div className="w-full flex flex-wrap border rounded border-violet-600 h-auto p-5 shadow-lg shadow-violet-500/50">
      <MintingInfo />
      <Minting />
    </div>
  );
};

export default Private;

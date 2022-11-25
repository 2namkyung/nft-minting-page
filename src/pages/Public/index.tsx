import PublicMintingInfo from './components/PublicMintingInfo';
import PublicMinting from './components/PublicMinting';

function Public() {
  return (
    <div className="w-full flex flex-wrap border rounded border-violet-600 h-auto p-5 shadow-lg shadow-violet-500/50">
      <PublicMintingInfo />
      <PublicMinting />
    </div>
  );
}

export default Public;

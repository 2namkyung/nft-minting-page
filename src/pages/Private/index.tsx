import PrivateMintingInfo from './components/PrivateMintingInfo';
import PrivateMinting from './components/PrivateMinting';

const Private = () => {
  return (
    <div className="w-full flex flex-wrap border rounded border-violet-600 h-auto p-5 shadow-lg shadow-violet-500/50">
      <PrivateMintingInfo />
      <PrivateMinting />
    </div>
  );
};

export default Private;

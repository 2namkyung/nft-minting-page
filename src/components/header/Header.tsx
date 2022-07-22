import { useNavigate } from 'react-router-dom';
import RainbowWallet from './RainbowWallet';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="lg:flex justify-between mb-2">
        <div className="flex items-center p-2 text-xl font-bold text-violet-600">
          <div className="mr-2" onClick={() => navigate('/')}>
            PUBLIC
          </div>
          <div onClick={() => navigate('/private')}>PRIVATE</div>
        </div>
        <div className="p-2">
          <RainbowWallet />
        </div>
      </div>
    </>
  );
}

export default Header;

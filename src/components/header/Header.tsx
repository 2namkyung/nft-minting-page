import { useLocation, useNavigate } from 'react-router-dom';
import RainbowWallet from './RainbowWallet';

function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <>
      <div className="lg:flex justify-between mb-2">
        <div className="flex items-center p-2 text-xl font-bold">
          <div
            className={`mr-2 ${
              location.pathname === '/' ? 'text-violet-600' : 'text-white'
            } `}
            onClick={() => navigate('/')}
          >
            PUBLIC
          </div>
          <div
            className={`mr-2 ${
              location.pathname === '/private'
                ? 'text-violet-600'
                : 'text-white'
            }`}
            onClick={() => navigate('/private')}
          >
            PRIVATE
          </div>
        </div>
        <div className="p-2">
          <RainbowWallet />
        </div>
      </div>
    </>
  );
}

export default Header;

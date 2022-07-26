import { memo } from 'react';
import { Fail, Success } from './svg';

type PropTypes = {
  isWhitelist: boolean;
};

const CheckWhitelist = ({ isWhitelist }: PropTypes) => {
  return (
    <div className={`flex ${isWhitelist ? 'text-green-600' : 'text-red-600'}`}>
      <div className="w-6 h-6 mr-2">{isWhitelist ? Success : Fail}</div>
      <div className="">{isWhitelist ? 'Success' : 'Fail'}</div>
    </div>
  );
};

export default memo(CheckWhitelist);

import { memo } from 'react';

type PropTypes = {
  title: string;
};
const BlockInfoHeader = ({ title }: PropTypes) => {
  return (
    <div className="text-3xl text-violet-600 font-extrabold mb-5">{title}</div>
  );
};

export default memo(BlockInfoHeader);

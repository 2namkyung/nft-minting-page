import React, { useEffect, useState } from 'react';
import { getRemainingNFT } from 'contracts/contract';

function ProgressBar() {
  const [percent, setPercent] = useState<string>('100%');

  useEffect(() => {
    (async () => {
      const remainCount: number = await getRemainingNFT();
      if (typeof remainCount !== 'number') {
        setPercent('0%');
        return;
      }

      setPercent(`${(remainCount / 100) * 100}%`);
    })();
  }, []);

  return (
    <div className="w-1/3 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: percent }}
      >
        {percent}
      </div>
    </div>
  );
}

export default ProgressBar;

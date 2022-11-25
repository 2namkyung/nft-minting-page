import { useEffect, useState } from 'react';
import {
  getPublicMintStartBlock,
  getPublicMintLimitAmount,
  getPublicMintPrice,
} from 'contracts/contract';

const usePublicMintConfig = () => {
  const [publicStartBlock, setPublicStartBlock] = useState<number>(0);
  const [publicMintPrice, setPublicMintPrice] = useState<number>(0);
  const [publicLimitAmount, setPublicLimitAmount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const publicConfig = await Promise.all([
        await getPublicMintStartBlock(),
        await getPublicMintPrice(),
        await getPublicMintLimitAmount(),
      ]);

      const startBlock = Number(publicConfig[0]);
      const mintPrice = Number(publicConfig[1]);
      const limitAmount = Number(publicConfig[2]);

      setPublicStartBlock(Number(startBlock));
      setPublicMintPrice(Number(mintPrice));
      setPublicLimitAmount(Number(limitAmount));
    })();
  }, []);

  return {
    publicStartBlock,
    publicMintPrice,
    publicLimitAmount,
  };
};

export default usePublicMintConfig;

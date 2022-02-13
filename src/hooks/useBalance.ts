import { formatReturnData } from '@/helpers/web3';
import { useAppSelector } from '@/redux/hooks';
import { selectAddress, selectNetwork } from '@/redux/user/selectors';
import { useGetTokenByIdQuery } from '@/services/api';
import { TokenData } from '@/types';
import { useEffect, useState } from 'react';

const useBalance = () => {
  const address = useAppSelector(selectAddress);
  const network = useAppSelector(selectNetwork);
  const [tokens, setTokens] = useState<any>({
    tokenList: [],
    totalValueNumber: 0,
    total24ValueNumber: 0,
    diffAmountValue: 0,
    diffPercentValue: 0,
  });
  const [liquidity, setLiquidity] = useState<any>({
    farmList: [],
    totalValueNumber: 0,
    total24ValueNumber: 0,
    diffAmountValue: 0,
    diffPercentValue: 0,
  });

  const { data, isLoading } = useGetTokenByIdQuery(
    {
      address,
      chainId: network?.id,
      pollingInterval: 60000,
    },
    {
      pollingInterval: 60000,
      skip: !address,
    },
  );

  const tokenList: Array<TokenData> = [];
  const farmList: Array<TokenData> = [];
  const rateMapping = {}; // We will keep a mapping for rates obtained from api

  let tokenCurrentTotal = 0;
  let token24Total = 0;

  let liquidityCurrentTotal = 0;
  let liquidity24Total = 0;

  if (data) {
    for (let x = 0; x < data.data.items.length; x += 1) {
      const item = data.data.items[x];
      const tdata = formatReturnData(item);

      const isAnLPToken = item.contract_name.includes('CREEPY');

      if (
        item.type === 'cryptocurrency' &&
        !isAnLPToken &&
        item.contract_ticker_symbol !== 'CREEPY'
      ) {
        tokenCurrentTotal += item.quote || 0;
        token24Total += item.quote_24h || 0;
        tokenList.push(tdata);
      }

      if (isAnLPToken) {
        liquidityCurrentTotal += item.quote || 0;
        liquidity24Total += item.quote_24h || 0;
        farmList.push(tdata);
      }
    }
  }

  useEffect(() => {
    const tokenDifference = tokenCurrentTotal - token24Total;
    const liquidityDifference = liquidityCurrentTotal - liquidity24Total;

    const tokensObject = {
      tokenList,
      totalValueNumber: tokenCurrentTotal,
      total24ValueNumber: token24Total,
      diffAmountValue: tokenDifference,
      diffPercentValue: tokenDifference / token24Total,
    };

    const liquidityObject = {
      farmList,
      totalValueNumber: liquidityCurrentTotal,
      total24ValueNumber: liquidity24Total,
      diffAmountValue: liquidityDifference,
      diffPercentValue: liquidityDifference / liquidity24Total,
    };

    setTokens(tokensObject);
    setLiquidity(liquidityObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { tokens, liquidity, rates: rateMapping, isLoading };
};

export default useBalance;

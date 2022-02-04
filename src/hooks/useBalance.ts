import { formatReturnData } from "@/helpers/web3";
import { useAppSelector } from "@/redux/hooks";
import { selectAddress, selectChain } from "@/redux/user/selectors";
import { useGetTokenByIdQuery } from "@/services/api";
import { TokenData } from "@/types";

const useBalance = () => {
  const address = useAppSelector(selectAddress);
  const chain = useAppSelector(selectChain);

  const { data, isLoading } = useGetTokenByIdQuery(
    {
      address,
      chainId: chain.value,
    },
    {
      skip: !address,
    }
  );

  const tokenList: Array<TokenData> = [];
  const farmList: Array<TokenData> = [];
  const rateMapping = {}; // We will keep a mapping for rates obtained from api

  let tokenCurrentTotal = 0;
  let token24Total = 0;
  let liquidityCurrentTotal = 0;
  let liquidity24Total = 0;

  // We loop through the wallet balances
  if (data) {
    for (let x = 0; x < data.data.items.length; x += 1) {
      const item = data.data.items[x];
      const tdata = formatReturnData(item);

      const isAnLPToken = item.contract_name.includes("LP");

      if (item.type === "cryptocurrency" && !isAnLPToken) {
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

  const tokenDifference = tokenCurrentTotal - token24Total;
  const liquidityDifference = liquidityCurrentTotal - liquidity24Total;

  const tokens = {
    tokenList,
    totalValueNumber: tokenCurrentTotal,
    total24ValueNumber: token24Total,
    diffAmountValue: tokenDifference,
    diffPercentValue: tokenDifference / token24Total,
  };

  const liquidity = {
    farmList,
    totalValueNumber: liquidityCurrentTotal,
    total24ValueNumber: liquidity24Total,
    diffAmountValue: liquidityDifference,
    diffPercentValue: liquidityDifference / liquidity24Total,
  };

  return { tokens, liquidity, rates: rateMapping, isLoading };
};

export default useBalance;

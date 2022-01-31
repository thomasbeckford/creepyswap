export const chainIdToString = (chainId: number) => {
  return `0x${chainId.toString(16)}`;
};

export const chainIdToNumber = (chainId: string) => {
  return parseInt(chainId, 16);
};

export const defaultChainId = 250;

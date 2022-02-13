// import { getSpiritSwapInfo } from "@/services/spiritSwapToken";
// import { BigNumber, ethers } from "ethers";
// import spiritAbi from "./../abi/spirit.json";

// const provider = new ethers.providers.JsonRpcProvider("https://rpc.ftm.tools");
// const spiritContract = new ethers.Contract("0x5cc61a78f164885776aa610fb0fe1257df78e59b", spiritAbi, provider);

// export const totalSpiritSupply = async () => {
//   let result = await spiritContract.totalSupply();
//   const resultNumber = BigNumber.from(result.toString()).div(BigNumber.from(10).pow(18)).toString();
//   console.log(resultNumber);

//   return Number(resultNumber);
// };

// export const price = async () => {
//   const { data } = await getSpiritSwapInfo();
//   const price = data[0].prices[0].price;
//   console.log(price);
//   return price;
// };

// export const marketCap = async () => 1 * (await totalSpiritSupply());

export const a = 'a';

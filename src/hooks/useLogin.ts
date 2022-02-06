import { connectWallet } from "@/helpers/web3";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress } from "@/redux/user";
import { selectChain } from "@/redux/user/selectors";
// import { position, useMediaQuery, useToast } from "@chakra-ui/react";
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const chain = useAppSelector(selectChain);

  const handleLogin = async (walletName: string) => {
    const defaultChain: any = {
      label: "FTM",
      value: 250,
    };

    const address = await connectWallet(
      chain.value || defaultChain,
      !window.ethereum ? "wallet_connect" : walletName
    );
    if (!address) return;
    dispatch(setAddress(address));
  };

  const handleLogout = () => {
    dispatch(setAddress(null));
  };

  return {
    handleLogin,
    handleLogout,
  };
};

export default useLogin;

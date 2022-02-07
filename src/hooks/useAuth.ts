import { ISelectedProvider } from "@/helpers/types";
import { connectWallet } from "@/helpers/web3";
import { WalletContext } from "@/provider";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress } from "@/redux/user";
import { selectChain } from "@/redux/user/selectors";
import { useContext } from "react";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const chain = useAppSelector(selectChain);
  const { provider, setProvider } = useContext(WalletContext);

  const handleLogin = async (selectedProvider: ISelectedProvider) => {
    const address = await connectWallet(
      selectedProvider,
      chain.id,
      setProvider
    );
    if (!address) return;
    dispatch(setAddress(address));
  };

  const handleLogout = async () => {
    try {
      dispatch(setAddress(null));
      if (provider.disconnect) {
        provider.disconnect();
        setProvider({});
      }
    } catch (e) {
      // console.log(e);
    }
  };
  return {
    handleLogin,
    handleLogout,
  };
};

export default useAuth;

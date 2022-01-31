import { defaultChainId } from "@/helpers/chain";
import { connectWallet } from "@/helpers/web3";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress, setChainId } from "@/redux/user";
import { selectChainId } from "@/redux/user/selectors";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const chainId = useAppSelector(selectChainId);

  const handleLogin = async (walletName: string) => {
    const address = await connectWallet(chainId, walletName);
    if (!address) return;
    dispatch(setAddress(address));
  };

  const handleLogout = () => {
    dispatch(setAddress(null));
    dispatch(setChainId(defaultChainId));
  };

  return {
    handleLogin,
    handleLogout,
  };
};

export default useLogin;

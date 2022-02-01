import { defaultChainId } from "@/helpers/chain";
import { connectWallet } from "@/helpers/web3";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress } from "@/redux/user";
import { selectChain } from "@/redux/user/selectors";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const chain = useAppSelector(selectChain);

  const handleLogin = async (walletName: string) => {
    const address = await connectWallet(chain.value, walletName);
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

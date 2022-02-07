import { connectWallet } from "@/helpers/web3";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress } from "@/redux/user";
import { selectChain } from "@/redux/user/selectors";

const useLogin = () => {
  const dispatch = useAppDispatch();
  // const providers = useContext(WalletContext);
  const chainId = useAppSelector(selectChain).id;

  const handleLogin = async (providerName: string) => {
    const address = await connectWallet(providerName, chainId);
    if (!address) return;
    dispatch(setAddress(address));
  };

  const handleLogout = async () => {
    try {
      dispatch(setAddress(null));
    } catch (e) {
      // console.log(e);
    }
  };
  return {
    handleLogin,
    handleLogout,
  };
};

export default useLogin;

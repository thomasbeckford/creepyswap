import { ISelectedProvider } from "@/helpers/types";
import { connectWallet } from "@/helpers/web3";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress } from "@/redux/user";
import { selectChain } from "@/redux/user/selectors";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const chain = useAppSelector(selectChain);

  const handleLogin = async (selectedProvider: ISelectedProvider) => {
    const address = await connectWallet(selectedProvider, chain.id);
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

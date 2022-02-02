import { connectWallet } from "@/helpers/web3";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress } from "@/redux/user";
import { selectChain } from "@/redux/user/selectors";
import { useToast } from "@chakra-ui/react";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const chain = useAppSelector(selectChain);
  const toast = useToast();

  const handleLogin = async (walletName: string) => {
    const defaultChain: any = {
      label: "FTM",
      value: 250,
    };
    const address = await connectWallet(
      chain.value || defaultChain,
      walletName
    );
    if (!address) return;
    dispatch(setAddress(address));
  };

  const handleLogout = () => {
    dispatch(setAddress(null));
    toast({
      title: "Logged out",
      description: `You have been logged out successfully.`,
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return {
    handleLogin,
    handleLogout,
  };
};

export default useLogin;

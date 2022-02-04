import { connectWallet } from "@/helpers/web3";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAddress } from "@/redux/user";
import { selectChain } from "@/redux/user/selectors";
import { useMediaQuery, useToast } from "@chakra-ui/react";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const chain = useAppSelector(selectChain);
  const toast = useToast();
  const [isMobile] = useMediaQuery("(max-width: 800px)");

  const handleLogin = async (walletName: string) => {
    const defaultChain: any = {
      label: "FTM",
      value: 250,
    };

    if (isMobile) {
      toast({
        title: "Login with mobile",
        description: "Please login with your mobile device",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      // Create a connector
      const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
      });

      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession();
      }

      // Subscribe to connection events
      connector.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];

        console.log(accounts, chainId);
      });

      return;
    }

    if (!window.ethereum && walletName === "metamask") {
      toast({
        title: "Please install MetaMask",
        description: "Please install MetaMask to use this feature",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

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

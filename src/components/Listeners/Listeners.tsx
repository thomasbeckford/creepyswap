import useLogin from "@/hooks/useLogin";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Listeners({ children }: any) {
  const { handleLogin } = useLogin();
  const toast = useToast();

  useEffect(() => {
    window.ethereum.on("accountsChanged", async (account: string[]) => {
      handleLogin("metamask");
      if (account.length > 0) {
        toast({
          title: "Account changed",
          description: `Your account has been changed to ${account[0]}`,
          status: "info",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    });
  }, []);

  return <>{children}</>;
}

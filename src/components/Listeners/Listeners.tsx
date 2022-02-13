import { IWallet } from '@/helpers/types';
import useAuth from '@/hooks/useAuth';
import { wallets } from '@/utils/connectors';
import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Listeners({ children }: any) {
  const { handleLogin } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (account: string[]) => {
        const wallet: IWallet = wallets[0]; // Metamask

        handleLogin(wallet);
        if (account.length > 0) {
          toast({
            title: 'Account changed',
            description: `Your account has been changed to ${account[0]}`,
            status: 'info',
            duration: 5000,
            isClosable: true,
            position: 'top',
          });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}

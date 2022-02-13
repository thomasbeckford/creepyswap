import { IWallet } from '@/helpers/types';
import { connectWallet } from '@/helpers/web3';
import { WalletContext } from '@/provider';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setAddress, setNetwork } from '@/redux/user';
import { selectNetwork } from '@/redux/user/selectors';
import { networks } from '@/utils/networks';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const network = useAppSelector(selectNetwork);
  const router = useRouter();
  const { provider, setProvider } = useContext(WalletContext);

  const handleLogin = async (wallet: IWallet) => {
    const address = await connectWallet(wallet, network.id, setProvider);
    if (!address) return;
    dispatch(setAddress(address));
    router.push('/portfolio');
  };

  const handleLogout = async () => {
    try {
      dispatch(setAddress(null));

      dispatch(setNetwork(networks[0]));
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

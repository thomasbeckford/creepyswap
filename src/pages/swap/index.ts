import { useRouter } from 'next/router';

export default function Swap() {
  const router = useRouter();

  router.push('/');
  window.open('https://spookyswap.finance/swap', '_blank');

  return null;
}

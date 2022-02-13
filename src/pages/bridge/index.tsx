import { useRouter } from 'next/router';

export default function Bridge() {
  const router = useRouter();

  router.push('/');
  window.open('https://spookyswap.finance/bridge', '_blank');

  return null;
}

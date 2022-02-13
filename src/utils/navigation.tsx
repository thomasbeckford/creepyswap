import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@chakra-ui/react';
import { GiSuspensionBridge } from 'react-icons/gi';
import { BiHome } from 'react-icons/bi';
import { BiLineChart } from 'react-icons/bi';
// import { FiSettings } from "react-icons/fi";
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setSidebarIsOpen } from '@/redux/sidebar';
import { useMediaQuery } from '@chakra-ui/react';
import useClickOutside from '@/hooks/useClickOutside';
import { MdSwapHoriz } from 'react-icons/md';
export const navigation = [
  {
    id: 0,
    label: 'Home',
    href: '/',
    icon: BiHome,
  },
  {
    id: 1,
    label: 'Portfolio',
    href: '/portfolio',
    icon: BiLineChart,
  },
  {
    id: 2,
    label: 'Swap',
    href: '/swap',
    icon: MdSwapHoriz,
  },
  // {
  //   id: 2,
  //   label: "Liquidity",
  //   href: "/liquidity",
  // },
  // {
  //   id: 3,
  //   label: "Farm",
  //   href: "/farm",
  // },
  // {
  //   id: 4,
  //   label: "Stake ",
  //   href: "/stake",
  // },
  {
    id: 3,
    label: 'Bridge',
    href: '/bridge',
    icon: GiSuspensionBridge,
  },

  // {
  //   id: 4,
  //   label: "Preferences",
  //   href: "/preferences",
  //   icon: FiSettings,
  // },
];

export const Navigation = ({
  sidebarIsOpen,
  sidebarRef,
}: {
  sidebarIsOpen: boolean;
  sidebarRef: any;
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { pathname } = router;
  const [isMobile] = useMediaQuery('(max-width: 800px)');

  const checkActive = (href: string) => pathname === href;

  useEffect(() => {
    if (isMobile && sidebarIsOpen) {
      dispatch(setSidebarIsOpen(!sidebarIsOpen));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useClickOutside(sidebarRef, () => {
    if (sidebarRef.current && sidebarIsOpen && isMobile) {
      dispatch(setSidebarIsOpen(false));
    }
  });

  return (
    <Box overflow="auto" rounded="md" margin="8px">
      {navigation.map(({ href, icon, id, label }) => (
        <Link key={id} href={href} passHref>
          <Flex
            bg={checkActive(href) ? 'rgba(50,120,250,0.1)' : 'none'}
            color={checkActive(href) ? '#fff' : '#a9a9a9'}
            rounded="md"
            p="0px 20px"
            height="48px"
            alignItems="center"
            cursor="pointer"
            _hover={{
              bg: 'rgba(50,210,250,0.1)',
              color: '#fff',
            }}
          >
            <Icon w={6} h={6} mr={3} as={icon} />
            {sidebarIsOpen && <Text>{label}</Text>}
          </Flex>
        </Link>
      ))}
    </Box>
  );
};

export const NavigateHome = ({ children }: any) => (
  <Link href="/" passHref>
    <Text cursor="pointer" fontSize={'lg'} fontWeight={'bold'}>
      {children}
    </Text>
  </Link>
);

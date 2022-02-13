import LoginModal from '@/components/Modals/Login';
import useAuth from '@/hooks/useAuth';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates';
import {
  Box,
  Button,
  useDisclosure,
  Text,
  Flex,
  Spinner,
  Center,
} from '@chakra-ui/react';

import { useAppSelector } from '@/redux/hooks';
import { selectIsLoggedIn } from '@/redux/user/selectors';
import Card from '@/components/Card';

import useBalance from '@/hooks/useBalance';
import FarmingRewards from './farming-rewards';
import WalletBreakdown from './wallet-breakdown';

import CountUpNumber from '@/components/CountUp';
import { IWallet } from '@/helpers/types';

export default function Portfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { handleLogin, handleLogout } = useAuth();

  const { tokens, liquidity, isLoading } = useBalance();

  const handleLoginClick = (wallet: IWallet) => {
    handleLogin(wallet);
    onClose();
  };

  const portfolioTables = [
    {
      title: 'Wallet Breakdown',
      component: <WalletBreakdown tokens={tokens} />,
    },
    {
      title: 'Farming Rewards',
      component: <FarmingRewards liquidity={liquidity} />,
    },
  ];

  return (
    <Main meta={<Meta title="Porfolio" description="" />}>
      {isLoggedIn && (
        <Card mb={5} width="100%" p={{ base: '0', md: '20px' }}>
          <Center gap="17" justifyContent={'space-around'}>
            <Box width="100px" height={8} borderRadius={8}>
              <CountUpNumber
                value={tokens.total24ValueNumber}
                prefix="$"
                decimals={2}
              />
            </Box>

            <Box borderRadius={8} p={{ base: '10px' }}>
              <Button variant={'outline'} onClick={handleLogout}>
                Disconnect
              </Button>
            </Box>
          </Center>
        </Card>
      )}

      {!isLoggedIn ? (
        <Card mb="20px" p="20px">
          <Flex justifyContent={'center'} pt="30px">
            <Box textAlign={'center'}>
              <Text mb="40px">
                Connect your wallet to Fantom Opera to start{' '}
              </Text>
              <Button mb="40px" variant="outline" onClick={onOpen}>
                Connect Wallet
              </Button>
            </Box>
          </Flex>
        </Card>
      ) : (
        <Box
          gap="5"
          display={{
            md: 'flex',
          }}
        >
          {portfolioTables.map((table) => (
            <Card flex="1" key={table.title}>
              {isLoading ? (
                <Spinner
                  mb="50px"
                  thickness="4px"
                  speed=".65s"
                  emptyColor="gray.900"
                  color="blue.800"
                  size="xl"
                />
              ) : (
                <Box borderRadius={8} mb={{ base: '10px' }}>
                  <Text textAlign={'center'} p="20px">
                    {table.title}
                  </Text>
                  {table.component}
                </Box>
              )}
            </Card>
          ))}
        </Box>
      )}

      <LoginModal
        handleLoginClick={handleLoginClick}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Main>
  );
}

//  <Box textAlign={"center"}>
//    <Flex justifyContent={"space-around"} mb="50px">
//      <Text color="blue.300" _hover={{ color: "blue.500" }}>
//        <Link href="/ftmscan" isExternal>
//          View on FTMScan <ExternalLinkIcon mx="2px" />
//        </Link>
//      </Text>
//      <Flex
//        onClick={onCopy}
//        cursor={"pointer"}
//        _hover={{ textDecoration: "underline", color: "blue.500" }}
//        ml={5}
//      >
//        <Link color="blue.300" _hover={{ color: "blue.500" }}>
//          Copy address
//          <Icon verticalAlign="sub" ml="2px" as={MdContentCopy} />
//        </Link>
//      </Flex>
//    </Flex>
//  </Box>;

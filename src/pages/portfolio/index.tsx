import LoginModal from "@/components/Modals/Login";
import useLogin from "@/hooks/useLogin";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates";
import {
  Box,
  Button,
  useDisclosure,
  Text,
  Flex,
  // Icon,
  Spinner,
  Skeleton,
  Center,
} from "@chakra-ui/react";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { selectIsLoggedIn } from "@/redux/user/selectors";
import Card from "@/components/Card";

import useBalance from "@/hooks/useBalance";
import FarmingRewards from "./farming-rewards";
import WalletBreakdown from "./wallet-breakdown";
import { formatAMPM } from "@/helpers/dates";
import CountUpNumber from "@/components/CountUp";

export default function Portfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { handleLogin } = useLogin();
  // const address = useAppSelector(selectAddress);
  const { tokens, liquidity, isLoading } = useBalance();

  const handleLoginClick = (walletName: string) => {
    handleLogin(walletName);
    onClose();
  };

  const { handleLogout } = useLogin();

  const portfolioTables = [
    {
      title: "Wallet Breakdown",
      component: <WalletBreakdown tokens={tokens} />,
    },
    {
      title: "Farming Rewards",
      component: <FarmingRewards liquidity={liquidity} />,
    },
  ];

  return (
    <Main meta={<Meta title="Porfolio" description="" />}>
      <Card p="20px" mb={5}>
        <Center gap="17" justifyContent={"space-around"}>
          <Skeleton
            width="100px"
            isLoaded={isLoggedIn}
            height={8}
            borderRadius={8}
          >
            <CountUpNumber
              value={tokens.total24ValueNumber}
              prefix="$"
              decimals={2}
            />
          </Skeleton>

          <Skeleton isLoaded={isLoggedIn} height={8} borderRadius={8}>
            <Text fontWeight={"bold"}>
              Data last Update at {formatAMPM(new Date())}
            </Text>
          </Skeleton>

          <Skeleton isLoaded={isLoggedIn} height={8} borderRadius={8}>
            <Button variant={"outline"} onClick={handleLogout}>
              Disconnect
            </Button>
          </Skeleton>
        </Center>
      </Card>

      {!isLoggedIn && (
        <Card mb="20px" p="20px">
          <Flex justifyContent={"center"} pt="30px">
            <Box textAlign={"center"}>
              <Text mb="40px">
                Connect your wallet to Fantom Opera to start{" "}
              </Text>
              <Button mb="40px" variant="outline" onClick={onOpen}>
                Connect Wallet
              </Button>
            </Box>
          </Flex>
        </Card>
      )}

      <Flex gap={7}>
        {portfolioTables.map((table) => (
          <Card mb="20px" p="20px 40px" flex="1" key={table.title}>
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
              <Skeleton isLoaded={isLoggedIn} borderRadius={8}>
                <Text textAlign={"center"} mb="20px" fontSize="large">
                  {table.title}
                </Text>
                {table.component}
              </Skeleton>
            )}
          </Card>
        ))}
      </Flex>

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

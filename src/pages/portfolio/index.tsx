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
  Icon,
  Link,
  Spinner,
} from "@chakra-ui/react";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { selectAddress, selectIsLoggedIn } from "@/redux/user/selectors";
import Card from "@/components/Card";
import { useClipboard } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import useBalance from "@/hooks/useBalance";
import FarmingRewards from "./farming-rewards";
import WalletBreakdown from "./wallet-breakdown";

export default function Portfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { handleLogin } = useLogin();
  const address = useAppSelector(selectAddress);
  const { tokens, liquidity, isLoading } = useBalance();

  const { onCopy } = useClipboard(address || "", 500);

  const handleLoginClick = (walletName: string) => {
    handleLogin(walletName);
    onClose();
  };

  return (
    <Main meta={<Meta title="Porfolio" description="" />}>
      <Card mb="20px" p="20px">
        <Flex
          justifyContent={"space-around"}
          textAlign="center"
          alignItems={"center"}
        >
          <Card>
            <Text>Portfolio Value</Text>
            {/* <Text>$1,978.27</Text> */}
          </Card>
          <Card>
            <Text>Harvest</Text>
          </Card>
          <Card>
            <Text>Portfolio Value</Text>
            {/* <Text>$1,978.27</Text> */}
          </Card>
          <Card>
            <Button variant="outline">Harverst all</Button>
          </Card>
        </Flex>
      </Card>
      <Card>
        <Flex justifyContent={"center"} pt="30px">
          {!isLoggedIn ? (
            <>
              <Text>Connect your wallet to Fantom Opera to start </Text>
              <Button variant="outline" onClick={onOpen}>
                Connect Wallet
              </Button>
            </>
          ) : (
            <Box>
              <Flex justifyContent={"space-around"}>
                <Text color="blue.300" _hover={{ color: "blue.500" }}>
                  <Link href="/ftmscan" isExternal>
                    View on FTMScan <ExternalLinkIcon mx="2px" />
                  </Link>
                </Text>
                <Flex
                  onClick={onCopy}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "blue.500" }}
                  ml={5}
                >
                  <Link color="blue.300" _hover={{ color: "blue.500" }}>
                    Copy address
                    <Icon verticalAlign="sub" ml="2px" as={MdContentCopy} />
                  </Link>
                </Flex>
              </Flex>

              {isLoading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              ) : (
                <Flex gap="3">
                  <Box>
                    <Text>Wallet Breakdown</Text>
                    <WalletBreakdown tokens={tokens} />
                  </Box>
                  <Box>
                    <Text>Farming Rewards</Text>
                    <FarmingRewards liquidity={liquidity} />
                  </Box>
                </Flex>
              )}
            </Box>
          )}
        </Flex>
      </Card>

      <LoginModal
        handleLoginClick={handleLoginClick}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Main>
  );
}

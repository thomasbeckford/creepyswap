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
} from "@chakra-ui/react";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { selectAddress, selectIsLoggedIn } from "@/redux/user/selectors";
import { Hero } from "@/components/Hero";
import Card from "@/components/Card";
import { useClipboard } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useGetTokenByIdQuery } from "@/services/api";

export default function Portfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { handleLogin } = useLogin();
  const address = useAppSelector(selectAddress);
  const { onCopy } = useClipboard(address || "", 500);

  const { isLoading } = useGetTokenByIdQuery({});

  const handleLoginClick = (walletName: string) => {
    handleLogin(walletName);
    onClose();
  };

  const heading = <Text fontWeight={"bold"}>My Wallet</Text>;

  // useEffect(() => {
  //   if (data.data) {
  //     const { items } = data.data;
  //     const totalAssetsValueArr = items.map((token: any) => {
  //       if (token.contract_name) {
  //         const { balance, contract_decimals, quote_rate } = token;
  //         let tokenRate;
  //         const tokenBalance = BigNumber.from(balance).div(
  //           BigNumber.from(10).pow(contract_decimals)
  //         );

  //         tokenRate = quote_rate !== null ? token.quote_rate : 0;
  //         return tokenBalance.mul(tokenRate);
  //       }
  //     });
  //     const totalAssetsValue = totalAssetsValueArr.reduce(
  //       (prev: any, next: any) => prev.plus(next)
  //     );

  //     console.log(totalAssetsValue);
  //     // setAssetsValue(totalAssetsValue)
  //     // setAssets(items)
  //     // setResultAssets(items)
  //     // setLoading(true)
  //   }
  // }, []);

  return (
    <Main meta={<Meta title="Porfolio" description="" />}>
      <Card>
        <Hero heading={heading}>
          {!isLoggedIn ? (
            <>
              <Text>Connect your wallet to Fantom Opera to start </Text>
              <Button variant="outline" onClick={onOpen}>
                Connect Wallet
              </Button>
            </>
          ) : (
            <Box>
              <Flex>
                <Text color="blue.300" _hover={{ color: "blue.500" }}>
                  <Link href="/ftmscan" isExternal>
                    View on FTMScan <ExternalLinkIcon mx="2px" />
                  </Link>
                </Text>
                <Flex
                  alignItems={"center"}
                  onClick={onCopy}
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline", color: "blue.500" }}
                  ml={5}
                >
                  <Link color="blue.300" _hover={{ color: "blue.500" }}>
                    Copy address{" "}
                    <Icon verticalAlign="sub" ml="2px" as={MdContentCopy} />
                  </Link>
                </Flex>
              </Flex>

              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <Box
                  mt="20px"
                  bg="transparent"
                  border="1px solid teal"
                  borderRadius={"8px"}
                >
                  <Flex justifyContent={"space-around"}>
                    <Text>CreepySwap</Text>
                    <Text>5.5 USD</Text>
                  </Flex>
                </Box>
              )}
            </Box>
          )}
        </Hero>
      </Card>

      <Card mt="5px">
        <Flex
          justifyContent={"space-around"}
          textAlign="center"
          alignItems={"center"}
        >
          <Card>
            <Text>Portfolio Value</Text>
            <Text>$1,978.27</Text>
          </Card>
          <Card>
            <Text>CPY to Harvest</Text>
            <Text>108.995</Text>
            <Text>$15.34</Text>
          </Card>
          <Card>
            <Text>Portfolio Value</Text>
            <Text>$1,978.27</Text>
          </Card>
          <Card>
            <Button variant="outline">Harverst all</Button>
          </Card>
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

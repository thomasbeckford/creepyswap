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
import { BigNumber } from "ethers";
import React, { useEffect } from "react";
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

  const { data, error, isLoading } = useGetTokenByIdQuery({});

  const handleLoginClick = (walletName: string) => {
    handleLogin(walletName);
    onClose();
  };

  const heading = <Text fontWeight={"bold"}>My Wallet</Text>;

  useEffect(() => {
    if (data.data) {
      const { items } = data.data;
      const totalAssetsValueArr = items.map((token: any) => {
        if (token.contract_name) {
          const { balance, contract_decimals, quote_rate } = token;
          let tokenRate;
          const tokenBalance = BigNumber.from(balance).div(
            BigNumber.from(10).pow(contract_decimals)
          );

          tokenRate = quote_rate !== null ? token.quote_rate : 0;
          return tokenBalance.mul(tokenRate);
        }
      });
      const totalAssetsValue = totalAssetsValueArr.reduce(
        (prev: any, next: any) => prev.plus(next)
      );

      console.log(totalAssetsValue);
      // setAssetsValue(totalAssetsValue)
      // setAssets(items)
      // setResultAssets(items)
      // setLoading(true)
    }
  }, []);

  return (
    <Main meta={<Meta title="Porfolio" description="" />}>
      <Hero heading={heading}>
        {!isLoggedIn ? (
          <>
            <Text>Connect your wallet to Fantom Opera to start </Text>
            <Button variant="outline" onClick={onOpen}>
              Connect Wallet
            </Button>
          </>
        ) : (
          <>
            <Flex alignItems={"center"} mt="20px">
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

            {isLoading ? <div>Loading...</div> : <Box>{console.log(data)}</Box>}
          </>
        )}
      </Hero>

      <Card>
        <Box>
          <Text>Portfolio Value</Text>
          <Text>$1,978.27</Text>
        </Box>
        <Box>
          <Text>CREEPY to Harvest</Text>
          <Text>108.995</Text>
          <Text>$15.34</Text>
        </Box>
        <Box>
          <Text>Portfolio Value</Text>
          <Text>$1,978.27</Text>
        </Box>
        <Box>
          <Button>Harverst all</Button>
        </Box>
      </Card>

      <LoginModal
        handleLoginClick={handleLoginClick}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Main>
  );
}

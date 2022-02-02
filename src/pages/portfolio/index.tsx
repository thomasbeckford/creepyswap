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
  Image,
} from "@chakra-ui/react";

import { useAppSelector } from "@/redux/hooks";
import React from "react";
import {
  selectAddress,
  selectChain,
  selectIsLoggedIn,
} from "@/redux/user/selectors";
import { Hero } from "@/components/Hero";
import Card from "@/components/Card";
import { useClipboard } from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { ExternalLinkIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { useGetTokenByIdQuery } from "@/services/api";

export default function Portfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { handleLogin } = useLogin();
  const address = useAppSelector(selectAddress);
  const chain = useAppSelector(selectChain);
  const { onCopy } = useClipboard(address || "", 500);

  const { isLoading, data } = useGetTokenByIdQuery({
    skip: !address,
    variables: {
      address,
      chainId: chain.value,
    },
  });

  const handleLoginClick = (walletName: string) => {
    handleLogin(walletName);
    onClose();
  };

  const heading = <Text fontWeight={"bold"}>My Wallet</Text>;

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
              {console.log(data.data.items)}
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <Box mt="30px" boxShadow="0px 0px 10px rgba(0, 0, 0, 0.6)">
                  {data.data.items
                    .filter(
                      ({ type }: { type: string }) => type === "cryptocurrency"
                    )
                    .map((token: any) => (
                      <Flex
                        key={token.contract_name}
                        justifyContent={"space-between"}
                        px="20px"
                        py="10px"
                      >
                        <Image
                          // src={`https://assets.spookyswap.finance/tokens/${token.contract_ticker_symbol}.png`}
                          src={`https://app.spiritswap.finance/images/tokens/${token.contract_ticker_symbol}.png`}
                          width="24px"
                          height="24px"
                          fallbackSrc={"https://via.placeholder.com/24"}
                          borderRadius={15}
                          alt={token.contract_name}
                        />
                        <Text>{token.contract_ticker_symbol}</Text>
                        <Text>{token.quote}</Text>
                      </Flex>
                    ))}
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

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Flex,
  Grid,
  Link,
  Center,
  Checkbox,
  Box,
  HStack,
  VStack,
  Avatar,
  AvatarBadge,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { wallets } from "@/utils/connectors";

import { networks } from "@/utils/networks";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setNetwork } from "@/redux/user";
import { selectNetwork } from "@/redux/user/selectors";
import { IWallet } from "@/helpers/types";

export default function LoginModal({ handleLoginClick, isOpen, onClose }: any) {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const selectedNetwork = useAppSelector(selectNetwork);
  const dispatch = useAppDispatch();

  const handleSelectNetwork = (selected: string) => {
    dispatch(setNetwork(selected));
  };

  const handleCheckbox = (e: any) => {
    return setAgreeTerms(!!e.target.checked);
  };

  const handleClose = () => {
    setAgreeTerms(false);
    onClose();
  };

  const handleConnect = (wallet: IWallet) => {
    handleLoginClick(wallet);
    setAgreeTerms(false);
  };

  return (
    <Modal size={"6xl"} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent
        padding={{
          base: "0",
          md: "20px",
        }}
        width="670px"
      >
        <ModalCloseButton color="blue.500" />
        <ModalHeader>Connect wallet</ModalHeader>
        <ModalBody>
          <Box
            padding={{
              base: "0",
              md: "10px",
            }}
            borderRadius="md"
            s
          >
            <HStack mb="20px">
              <Center
                alignSelf="flex-start"
                borderRadius="md"
                bg="blue.600"
                fontWeight="bold"
                width="26px"
                height="26px"
              >
                1
              </Center>

              <VStack fontSize="18px">
                <Text>
                  Accept{" "}
                  <Link color="blue.500" href="">
                    Terms of Service{" "}
                  </Link>
                  and{" "}
                  <Link color="blue.500" href="">
                    Privacy Policy{" "}
                  </Link>
                </Text>
                <Box alignSelf="flex-start" fontSize="18px">
                  <Checkbox onChange={handleCheckbox}>
                    <Text>I read and accept</Text>
                  </Checkbox>
                </Box>
              </VStack>
            </HStack>
          </Box>
          <Box
            p={{
              base: "5px",
              md: "10px",
            }}
            borderRadius="md"
            mb="20px"
          >
            <HStack mb="10px">
              <Center
                borderRadius="md"
                bg={agreeTerms ? "blue.600" : "gray.900"}
                fontWeight="bold"
                width="26px"
                height="26px"
              >
                2
              </Center>

              <Center fontSize="18px">Choose Network</Center>
            </HStack>

            <Grid templateColumns="repeat(4, 1fr)">
              {networks.map((network: any) => (
                <Flex
                  key={network.name}
                  flexDirection="column"
                  alignItems="center"
                  onClick={() => handleSelectNetwork(network)}
                  p="5px 0 5px 0px"
                  m="4px"
                  borderRadius="md"
                  _hover={
                    agreeTerms
                      ? {
                          bg: "gray.900",
                          borderRadius: "md",
                          cursor: "pointer",
                        }
                      : {
                          cursor: "default",
                        }
                  }
                >
                  <Avatar
                    src={network.activeLogo}
                    bg="#212a3b"
                    filter={agreeTerms ? "grayscale(0%)" : "grayscale(80%)"}
                    alt={network.name}
                    borderRadius="50%"
                    border="none"
                    size="lg"
                  >
                    {selectedNetwork.name === network.name && (
                      <AvatarBadge border="2px">
                        <Icon
                          as={CheckCircleIcon}
                          w="5"
                          h="5"
                          color="green.400"
                          border="none"
                        />
                      </AvatarBadge>
                    )}
                  </Avatar>
                  <Text mt="5px" fontSize="13px" lineHeight="16px">
                    {network.name}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </Box>

          <Box p="5px" borderRadius="md" mb="20px">
            <HStack mb="10px">
              <Center
                borderRadius="md"
                bg={agreeTerms ? "blue.600" : "gray.900"}
                fontWeight="bold"
                width="26px"
                height="26px"
              >
                3
              </Center>

              <Center fontSize="18px">Choose Wallet</Center>
            </HStack>

            <Grid templateColumns="repeat(2, 1fr)">
              {wallets.map((wallet) => (
                <Flex
                  key={wallet.name}
                  flexDirection="column"
                  alignItems="center"
                  onClick={() => handleConnect(wallet)}
                  p="5px 0 5px 0px"
                  m="4px"
                  borderRadius="md"
                  _hover={
                    selectedNetwork && agreeTerms
                      ? {
                          bg: "gray.900",
                          borderRadius: "md",
                          cursor: "pointer",
                        }
                      : {
                          cursor: "default",
                        }
                  }
                >
                  <Avatar
                    size="lg"
                    src={wallet.src}
                    alt={wallet.alt}
                    bg="#212a3b"
                    p="10px"
                    m="10px"
                    borderRadius="50%"
                    border="none"
                    filter={
                      selectedNetwork && agreeTerms
                        ? "grayscale(0%)"
                        : "grayscale(80%)"
                    }
                  ></Avatar>
                  <Text mt="5px" fontSize="14px" lineHeight="16px">
                    {wallet.name}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </Box>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

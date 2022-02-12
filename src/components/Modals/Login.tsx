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
  Image,
  Grid,
  Link,
  Center,
  Checkbox,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { wallets } from "@/utils/connectors";
import { ISelectedProvider } from "@/helpers/types";
import { networks } from "@/utils/networks";

export default function LoginModal({ handleLoginClick, isOpen, onClose }: any) {
  const initialState = {
    terms: true,
    network: false,
    wallet: false,
  };
  const [activeSection, setActiveSection] = useState(initialState);
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);

  const handleClick = (selectedProvider: ISelectedProvider) => {
    handleLoginClick(selectedProvider);
  };

  const handleSelectNetwork = (selected: string) => {
    if (selected && activeSection.network) {
      setSelectedNetwork(selected);
      return setActiveSection({ ...activeSection, wallet: true });
    }
    setSelectedNetwork(null);
    setActiveSection(initialState);
  };

  const handleCheckbox = (e: any) => {
    if (e.target.checked) {
      return setActiveSection({ ...activeSection, network: true });
    }
    setSelectedNetwork(null);
    setActiveSection(initialState);
  };

  const handleClose = () => {
    setActiveSection(initialState);
    onClose();
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
                bg={activeSection.network ? "blue.600" : "gray.900"}
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
                  onClick={() => handleSelectNetwork(network.name)}
                  p="5px 0 5px 0px"
                  m="4px"
                  bg={
                    selectedNetwork === network.name
                      ? "gray.900"
                      : "transparent"
                  }
                  borderRadius="md"
                  _hover={
                    activeSection.network
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
                  <Image
                    src={
                      activeSection.network
                        ? network.activeLogo
                        : network.inactiveLogo
                    }
                    alt={network.name}
                    borderRadius="50%"
                    border="none"
                    w="65px"
                  />
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
                bg={activeSection.wallet ? "blue.600" : "gray.900"}
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
                  onClick={() => handleClick(wallet)}
                  flexDirection="column"
                  alignItems="center"
                  cursor="pointer"
                  _hover={{
                    backgroundColor: "blue.500",
                    borderRadius: "10px",
                  }}
                  p="5px"
                >
                  <Image
                    borderRadius="lg"
                    src={wallet.src}
                    alt={wallet.alt}
                    w="45px"
                  />
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

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
import { wallets } from "@/utils/connectors";

import { networks } from "@/utils/networks";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAcceptTerms, setNetwork } from "@/redux/user";
import { selectAcceptTerms, selectNetwork } from "@/redux/user/selectors";
import { IWallet } from "@/helpers/types";

export default function LoginModal({ handleLoginClick, isOpen, onClose }: any) {
  const selectedNetwork = useAppSelector(selectNetwork);
  const acceptTerms = useAppSelector(selectAcceptTerms);
  const dispatch = useAppDispatch();

  const handleSelectNetwork = (selected: string) => {
    dispatch(setNetwork(selected));
  };

  const handleClose = () => {
    onClose();
  };

  const handleConnect = (wallet: IWallet) => {
    handleLoginClick(wallet);
  };

  const handleTerms = (e: any) => {
    dispatch(setAcceptTerms(e.target.checked));
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
                  <Checkbox isChecked={acceptTerms} onChange={handleTerms}>
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
                bg={acceptTerms ? "blue.600" : "gray.900"}
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
                    acceptTerms
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
                    filter={acceptTerms ? "grayscale(0%)" : "grayscale(80%)"}
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
                bg={acceptTerms ? "blue.600" : "gray.900"}
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
                    selectedNetwork && acceptTerms
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
                    bg="#212a3b"
                    p="10px"
                    m="10px"
                    borderRadius="50%"
                    border="none"
                    filter={
                      selectedNetwork && acceptTerms
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

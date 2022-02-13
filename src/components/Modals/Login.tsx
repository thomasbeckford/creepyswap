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
} from '@chakra-ui/react';
import { wallets } from '@/utils/connectors';

import { networks } from '@/utils/networks';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setAcceptTerms, setNetwork } from '@/redux/user';
import { selectAcceptTerms, selectNetwork } from '@/redux/user/selectors';
import { IWallet } from '@/helpers/types';

export default function LoginModal({ handleLoginClick, isOpen, onClose }: any) {
  const selectedNetwork = useAppSelector(selectNetwork);
  const acceptTerms = useAppSelector(selectAcceptTerms);
  const dispatch = useAppDispatch();

  const handleSelectNetwork = (selected: string) => {
    if (acceptTerms) dispatch(setNetwork(selected));
  };

  const handleClose = () => {
    onClose();
  };

  const handleConnect = (wallet: IWallet) => {
    if (acceptTerms && selectedNetwork) handleLoginClick(wallet);
  };

  const handleTerms = (e: any) => {
    dispatch(setAcceptTerms(e.target.checked));
  };

  const IconNumber = (number: number) => (
    <Center
      alignSelf="flex-start"
      borderRadius="md"
      bg="blue.600"
      fontWeight="bold"
      width="26px"
      height="26px"
    >
      {number}
    </Center>
  );

  return (
    <Modal size={'6xl'} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent
        padding={{
          base: '0px',
          md: '20px',
        }}
        width="600px"
      >
        <ModalCloseButton color="blue.300" />
        <ModalHeader>Connect wallet</ModalHeader>
        <ModalBody>
          <Box
            padding={{
              base: '0',
              md: '10px',
            }}
            borderRadius="md"
          >
            <HStack mb="20px">
              {IconNumber(1)}

              <VStack fontSize="lg">
                <Text>
                  Accept{' '}
                  <Link color="blue.500" href="">
                    Terms of Service{' '}
                  </Link>
                  and{' '}
                  <Link color="blue.500" href="">
                    Privacy Policy{' '}
                  </Link>
                </Text>
                <Box alignSelf="flex-start" fontSize="lg">
                  <Checkbox isChecked={acceptTerms} onChange={handleTerms}>
                    <Text>I read and accept</Text>
                  </Checkbox>
                </Box>
              </VStack>
            </HStack>
          </Box>
          <Box
            padding={{
              base: '0',
              md: '10px',
            }}
            borderRadius="md"
          >
            <HStack mb="20px">
              {IconNumber(2)}

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
                          bg: 'gray.900',
                          borderRadius: 'md',
                          cursor: 'pointer',
                        }
                      : {
                          cursor: 'default',
                        }
                  }
                >
                  <Avatar
                    src={network.logo}
                    bg="#212a3b"
                    filter={acceptTerms ? 'grayscale(0%)' : 'grayscale(80%)'}
                    borderRadius="50%"
                    border="none"
                    size="lg"
                  >
                    {selectedNetwork.name === network.name && (
                      <AvatarBadge border="2px" bg="#fff">
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

          <Box
            padding={{
              base: '0',
              md: '10px',
            }}
            borderRadius="md"
          >
            <HStack mb="10px">
              {IconNumber(3)}
              <Center fontSize="18px">Choose Wallet</Center>
            </HStack>

            <Grid templateColumns="repeat(4, 1fr)">
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
                          bg: 'gray.900',
                          borderRadius: 'md',
                          cursor: 'pointer',
                        }
                      : {
                          cursor: 'default',
                        }
                  }
                >
                  <Avatar
                    src={wallet.src}
                    bg="#212a3b"
                    filter={acceptTerms ? 'grayscale(0%)' : 'grayscale(80%)'}
                    borderRadius="50%"
                    border="none"
                    size="lg"
                  />
                  <Text mt="5px" fontSize="13px" lineHeight="16px">
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

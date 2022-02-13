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
  Button,
  Link,
  Icon,
} from '@chakra-ui/react';
import useAuth from '@/hooks/useAuth';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useClipboard } from '@chakra-ui/react';
import { MdContentCopy } from 'react-icons/md';

export default function AddressModal({ isOpen, onClose, address }: any) {
  const { handleLogout } = useAuth();

  const { onCopy } = useClipboard(address || '', 500);

  const handleLogoutClick = () => {
    handleLogout();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Your wallet</ModalHeader>
        <ModalBody>
          <Text color="teal.300">{address}</Text>

          <Flex alignItems={'center'} mt="20px">
            <Text color="blue.300" _hover={{ color: 'blue.500' }}>
              <Link href="/ftmscan" isExternal>
                View on FTMScan <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
            <Flex
              alignItems={'center'}
              onClick={onCopy}
              cursor={'pointer'}
              _hover={{ textDecoration: 'underline', color: 'blue.500' }}
              ml={5}
            >
              <Link color="blue.300" _hover={{ color: 'blue.500' }}>
                Copy address{' '}
                <Icon verticalAlign="sub" ml="2px" as={MdContentCopy} />
              </Link>
            </Flex>
          </Flex>

          <Flex justifyContent={'flex-end'}>
            <Button variant="outline" onClick={handleLogoutClick}>
              Disconnect
            </Button>
          </Flex>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

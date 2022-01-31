import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { enabledConnectors } from "@/utils/connectors";

export default function LoginModal({ handleLoginClick, isOpen, onClose }: any) {
  const handleClick = (walletName: string) => {
    const walletNameSnakeCase = walletName.toLowerCase().replace(/ /g, "_");
    handleLoginClick(walletNameSnakeCase);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Connect to a wallet</ModalHeader>
        <ModalBody>
          {enabledConnectors.map(({ name: walletName, src, alt }) => (
            <Box
              key={walletName}
              onClick={() => handleClick(walletName)}
              variant="outline"
              border="2px solid #fff"
              borderRadius={8}
              textAlign="center"
              fontWeight={600}
              mt={4}
              cursor="pointer"
            >
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={5}
                _hover={{ opacity: ".5" }}
                transition={".2s"}
              >
                <Text>{walletName}</Text>
                <Image src={src} alt={alt} width={45} height={45} />
              </Flex>
            </Box>
          ))}
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

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
  const handleClick = (providerName: string) => {
    const providerNameSnakeCase = providerName.toLowerCase().replace(/ /g, "_");
    handleLoginClick(providerNameSnakeCase);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="20px">
        <ModalCloseButton color="blue.500" />
        <ModalHeader textAlign="center">Connect to a wallet</ModalHeader>
        <ModalBody>
          {enabledConnectors.map(({ name: providerName, src, alt }) => (
            <Box
              key={providerName}
              onClick={() => handleClick(providerName)}
              borderRadius={8}
              bg="gray.600"
              textAlign="center"
              fontWeight={600}
              fontSize={"lg"}
              mt={4}
              cursor="pointer"
              _hover={{ bg: "gray.500" }}
              transition="all .2s"
            >
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={15}
                transition={".2s"}
              >
                <Text>{providerName}</Text>
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

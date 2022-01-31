import {
  Flex,
  Button,
  useColorMode,
  useDisclosure,
  HStack,
  Box,
  IconButton,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAddress, selectIsLoggedIn } from "@/redux/user/selectors";
import useLogin from "@/hooks/useLogin";
import LoginModal from "../Modals/Login";
import { setSidebarIsOpen } from "@/redux/sidebar";
import { selectSidebarIsOpen } from "@/redux/sidebar/selectors";
import AddressModal from "../Modals/Address";

function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const {
    isOpen: isAddressModalOpen,
    onOpen: onAddressModalOpen,
    onClose: onAddressModalClose,
  } = useDisclosure();

  const { handleLogin } = useLogin();
  const dispatch = useAppDispatch();

  const address = useAppSelector(selectAddress);
  const loggedIn = useAppSelector(selectIsLoggedIn);
  const sidebarIsOpen = useAppSelector(selectSidebarIsOpen);

  const handleLoginClick = (walletName: string) => {
    handleLogin(walletName);
    onModalClose();
  };

  const handleAddressModal = () => {
    onAddressModalOpen();
  };

  const toggleSidebar = () => {
    dispatch(setSidebarIsOpen(!sidebarIsOpen));
  };

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            variant="outline"
            size={"md"}
            icon={sidebarIsOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={toggleSidebar}
          />

          <HStack position="absolute" right="5">
            <Button variant="outline" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {!loggedIn ? (
              <Button variant="outline" onClick={onModalOpen}>
                Connect Wallet
              </Button>
            ) : (
              <Button
                variant={"outline"}
                cursor={"pointer"}
                onClick={handleAddressModal}
              >
                {address?.replace(/(.{7})..+/, "$1…")}
              </Button>
            )}
          </HStack>
        </Flex>
      </Box>

      <LoginModal
        handleLoginClick={handleLoginClick}
        isOpen={isModalOpen}
        onClose={onModalClose}
      />

      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={onAddressModalClose}
        address={address}
      />
    </>
  );
}
export default Topbar;

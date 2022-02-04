import {
  Flex,
  Button,
  useDisclosure,
  HStack,
  Box,
  IconButton,
  useToast,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectAddress,
  selectChain,
  selectIsLoggedIn,
} from "@/redux/user/selectors";
import useLogin from "@/hooks/useLogin";
import LoginModal from "../Modals/Login";
import { setSidebarIsOpen } from "@/redux/sidebar";
import { selectSidebarIsOpen } from "@/redux/sidebar/selectors";
import AddressModal from "../Modals/Address";
import { NetworkInterface, networks } from "@/utils/networks";

import { Select } from "chakra-react-select";
import { setChain } from "@/redux/user";
import { chainIdToString } from "@/helpers/chain";
import { selectStyles } from "@/theme/models/select";

function Topbar() {
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
  const selectedChain = useAppSelector(selectChain);
  const toast = useToast();

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

  // selectOptions from networks array
  const selectOptions = networks.map((network) => ({
    value: network.chainId,
    label: network.symbol,
  }));

  const handleSelectChainId = async (selectedOption: any) => {
    const network: NetworkInterface =
      networks.find((network) => network.chainId === selectedOption.value) ||
      networks[0];

    dispatch(
      setChain({
        value: network.chainId,
        label: network.symbol,
      })
    );

    // Only for metamask
    try {
      const switchNetwork = window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: chainIdToString(network.chainId),
          },
        ],
      });

      await switchNetwork;
      toast({
        title: `${network.symbol} network selected`,
        description: `You are now connected to ${network.symbol} network`,
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error: any) {
      toast({
        title: `Error switching network`,
        description: `${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
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
            <Button variant="outline">
              {/* <Logo showName /> */}
              <Text>$ 20.22</Text>
            </Button>

            {!loggedIn ? (
              <Button variant="outline" onClick={onModalOpen}>
                Connect Wallet
              </Button>
            ) : (
              <>
                <Button
                  variant={"outline"}
                  cursor={"pointer"}
                  onClick={handleAddressModal}
                >
                  {address?.replace(/(.{7})..+/, "$1…")}
                </Button>

                <Select
                  chakraStyles={selectStyles}
                  options={selectOptions}
                  defaultValue={selectedChain}
                  onChange={handleSelectChainId}
                  isSearchable={false}
                />
              </>
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

import {
  Flex,
  Button,
  useColorMode,
  useDisclosure,
  HStack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
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
import Logo from "@/components/Logo";
import { NetworkInterface, networks } from "@/utils/networks";

import { ChakraStylesConfig, Select } from "chakra-react-select";
import { setChain } from "@/redux/user";
import { chainIdToString } from "@/helpers/chain";

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
  const selectedChain = useAppSelector(selectChain);

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

  const chakraStyles: ChakraStylesConfig = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      p: 0,
      w: "30px",
      background: "transparent",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      p: 0,
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: "4px",
      borderColor: "teal.300",
      border: "1px solid",
      p: 0,
      w: "90px",
      cursor: "pointer",
      _hover: {
        borderColor: "teal.300",
        background: "rgba(255, 255, 255, 0.08)",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: "4x",
      border: "none",
      boxShadow: "none",
      p: 0,
      w: "90px",
    }),
  };

  const handleSelectChainId = (selectedOption: any) => {
    const network: NetworkInterface =
      networks.find((network) => network.chainId === selectedOption.value) ||
      networks[0];

    dispatch(
      setChain({
        value: network.chainId,
        label: network.symbol,
      })
    );

    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: chainIdToString(network.chainId),
          },
        ],
      })
      .then((result: any) => {
        // The result varies by RPC method.
        // For example, this method will return a transaction hash hexadecimal string on success.
        console.log("res", result);
      })
      .catch((error: any) => {
        // If the request fails, the Promise will reject with an error.
      });
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
              <Logo showName />$ 20.23
            </Button>
            <Button variant="outline" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
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
                  chakraStyles={chakraStyles}
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

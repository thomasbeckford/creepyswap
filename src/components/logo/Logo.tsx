import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectSidebarIsOpen } from "@/redux/sidebar/selectors";

const Logo() {
  const sidebarIsOpen = useAppSelector(selectSidebarIsOpen);

  return (
    <Box
      position="fixed"
      left="7"
      top="2"
      display="flex"
      alignContent="center"
      alignItems="center"
    >
      <Box height={45} bg="teal.300" width={45} borderRadius={16} />
      {sidebarIsOpen && (
        <Text ml={3} fontWeight="bold" fontSize="25px">
          CreepySwap
        </Text>
      )}
    </Box>
  );
}

export default Logo;
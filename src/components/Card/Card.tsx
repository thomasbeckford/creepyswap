import { Box, useColorMode } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

export default function Card({ children }: { children: any }) {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderRadius="0.5rem"
      bg={colorMode === "light" ? "#fafafa" : "gray.900"}
      padding="5px 10px 5px 45px"
      display="flex"
      flexFlow="row"
      justifyContent="space-around"
      alignItems="center"
      mb={5}
    >
      {children}
    </Box>
  );
}

import { Box, Center, useColorMode } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

export default function Card({
  children,
  height,
  width,
}: {
  children: ReactNode;
  height?: string;
  width?: string;
}) {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderRadius="0.5rem"
      bg={colorMode === "light" ? "#fafafa" : "gray.900"}
      h={height || "auto"}
      width={width || "auto"}
    >
      {children}
    </Box>
  );
}

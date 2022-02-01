import { Box, Flex, Stack, StackDivider, Text } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./Copyright";
import { LinkGrid } from "./Linkgrid";

import { SocialMediaLinks } from "./SocialMediaLinks";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "28" }}
      >
        <Box>
          <Flex>
            <Box height={45} bg="teal.300" width={45} borderRadius={16} />
            <Text
              ml="10px"
              alignSelf={"center"}
              fontWeight="bold"
              fontSize="25px"
            >
              CreepySwap
            </Text>
          </Flex>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "10", md: "20" }}
        >
          <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);

export default Footer;

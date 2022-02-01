import Card from "@/components/Card";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Switch,
  useColorMode,
  Text,
  Center,
} from "@chakra-ui/react";
import React from "react";

const heading = <Box>Preferences</Box>;

export default function Preferences() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Main meta={<Meta title="Bridge" description="" />}>
      <Box bg={colorMode === "light" ? "#fafafa" : "gray.900"}>
        <Center height={100}>
          <Text>General Settings</Text>
        </Center>
      </Box>
      <Flex justifyContent={"center"} gap={5} mt="10px" mb="10px">
        <Box
          height="100px"
          width="200px"
          borderRadius="0.5rem"
          bg={colorMode === "light" ? "#fafafa" : "gray.900"}
          textAlign={"center"}
        >
          <Center height={100} justifyContent={"space-around"}>
            <Text>Theme</Text>
            <Switch onChange={toggleColorMode} />
          </Center>
        </Box>

        <Box
          height="100px"
          width="200px"
          borderRadius="0.5rem"
          bg={colorMode === "light" ? "#fafafa" : "gray.900"}
        >
          <Center height={100} justifyContent={"space-around"}>
            Set transaction speed
          </Center>
        </Box>
        <Box
          height="100px"
          width="200px"
          borderRadius="0.5rem"
          bg={colorMode === "light" ? "#fafafa" : "gray.900"}
        >
          <Center height={100} justifyContent={"space-around"}>
            <Text>Enable art</Text>
            <Switch />
          </Center>
        </Box>
      </Flex>
      <Flex justifyContent={"center"} gap={5} mt="10px" mb="10px">
        <Box
          height="100px"
          width="200px"
          borderRadius="0.5rem"
          bg={colorMode === "light" ? "#fafafa" : "gray.900"}
          textAlign={"center"}
        >
          <Center height={100} justifyContent={"space-around"}></Center>
        </Box>

        <Box
          height="100px"
          width="200px"
          borderRadius="0.5rem"
          bg={colorMode === "light" ? "#fafafa" : "gray.900"}
        >
          <Center height={100} justifyContent={"space-around"}></Center>
        </Box>
        <Box
          height="100px"
          width="200px"
          borderRadius="0.5rem"
          bg={colorMode === "light" ? "#fafafa" : "gray.900"}
        >
          <Center height={100} justifyContent={"space-around"}></Center>
        </Box>
      </Flex>
    </Main>
  );
}

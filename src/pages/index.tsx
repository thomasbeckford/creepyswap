import { Hero } from "@/components/Hero";
import { Meta } from "@/layout/Meta";
import type { NextPage } from "next";
import { Main } from "@/templates";
import { AppConfig } from "@/config";
import { Button, Stack, Switch, Text, toast, useToast } from "@chakra-ui/react";

const Home: NextPage = () => {
  const toast = useToast();

  const heading = (
    <>
      {AppConfig.site_name} <br />
      <Text as={"span"} color={"green.400"}>
        {AppConfig.network}
      </Text>
    </>
  );

  return (
    <Main
      meta={<Meta title="CreepySwap" description="CreepySwap for Fantom" />}
    >
      <Hero heading={heading}>
        <Text color={"gray.500"}>
          Monetize your content by charging your most loyal readers and reward
          them loyalty points. Give back to your loyal readers by granting them
          access to your pre-releases and sneak-peaks.
        </Text>

        <Stack
          direction={"row"}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: "Transaction completed.",
                description: "You just sent me 500k USDC.",
                status: "info",
                duration: 9000,
                isClosable: true,
                position: "top-left",
              })
            }
          >
            Info Example
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: "Transaction completed.",
                description: "SpiritSwap just sent you 500k USDC.",
                status: "success",
                duration: 9000,
                isClosable: true,
                position: "top-right",
              })
            }
          >
            Success Example
          </Button>
        </Stack>
      </Hero>
    </Main>
  );
};

export default Home;

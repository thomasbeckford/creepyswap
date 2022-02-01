import { Hero } from "@/components/Hero";
import { Meta } from "@/layout/Meta";
import type { NextPage } from "next";
import { Main } from "@/templates";
import { AppConfig } from "@/config";
import { Button, Stack, Text, useToast } from "@chakra-ui/react";

const Home: NextPage = () => {
  const heading = (
    <>
      {AppConfig.site_name} <br />
      <Text as={"span"} color={"blue.800"}>
        {AppConfig.network}
      </Text>
    </>
  );

  return (
    <Main
      meta={<Meta title="CreepySwap" description="CreepySwap for Fantom" />}
    >
      <Hero heading={heading}>
        <Text color={"gray.500"}>{AppConfig.description}</Text>
      </Hero>
    </Main>
  );
};

export default Home;

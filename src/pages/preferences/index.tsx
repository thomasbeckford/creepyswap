import { Hero } from "@/components/Hero";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates";
import { Box } from "@chakra-ui/react";
import React from "react";

const heading = <Box>Preferences</Box>;

export default function Preferences() {
  return (
    <Main meta={<Meta title="Bridge" description="" />}>
      <Hero heading={heading}></Hero>
    </Main>
  );
}

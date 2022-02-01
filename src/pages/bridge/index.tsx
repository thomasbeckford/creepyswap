import Card from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates";
import { Box } from "@chakra-ui/react";
import React from "react";

const heading = <Box>Bridge</Box>;

export default function Bridge() {
  return (
    <Main meta={<Meta title="Bridge" description="" />}>
      <Card>
        <Hero heading={heading}></Hero>
      </Card>
    </Main>
  );
}

import { Hero } from "@/components/Hero";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const heading = <Box>Bridge</Box>;

export default function Bridge() {
  return (
    <Main meta={<Meta title="Bridge" description="" />}>
      <Hero heading={heading}></Hero>
    </Main>
  );
}

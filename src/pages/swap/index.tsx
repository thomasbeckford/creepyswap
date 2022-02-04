import Card from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Meta } from "@/layout/Meta";
import { Main } from "@/templates";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

const heading = <Text>Swap</Text>;

export default function Swap() {
  return (
    <Main meta={<Meta title="Swap" description="" />}>
      <Card>
        <Hero heading={heading}>
          <Box
            height={300}
            border="1px solid #313131"
            borderRadius="lg"
            width={600}
            margin="0 auto"
          >
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab>Market</Tab>
                <Tab>Limit</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box>
                    <Text>From</Text>
                  </Box>
                  <Box>
                    <Text>To</Text>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <Text>From</Text>
                  </Box>
                  <Box>
                    <Text>To</Text>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Hero>
      </Card>
    </Main>
  );
}

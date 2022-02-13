import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { FooterHeading } from './FooterHeading';

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Auditors</FooterHeading>
      <Stack>
        <Link>Certik</Link>
        <Link>MixBytes</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Exchanges</FooterHeading>
      <Stack>
        <Link>Gate.io</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);

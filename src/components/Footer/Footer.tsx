import { AppConfig } from '@/config';
import { Box, Flex, Stack, StackDivider, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Copyright } from './Copyright';
import { LinkGrid } from './LinkGrid';

import { SocialMediaLinks } from './SocialMediaLinks';

const Footer = () => (
  <Box
    as="footer"
    py="12"
    px={{ base: '4', md: '8' }}
    position="absolute"
    bottom="200px"
    height="1rem"
  >
    <Stack divider={<StackDivider />}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '10', lg: '28' }}
      >
        <Box>
          <Flex justifyContent={'center'}>
            <Box height={45} bg="teal.300" width={45} borderRadius={16} />
            <Text
              ml="10px"
              alignSelf={'center'}
              fontWeight="bold"
              fontSize="25px"
            >
              {AppConfig.site_name}
            </Text>
          </Flex>
          <Box textAlign={'center'} mt={{ base: '10', md: '20px' }}>
            <SocialMediaLinks />
          </Box>
        </Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '10', md: '20' }}
        >
          <LinkGrid
            mt="10px"
            spacing={{ base: '10', md: '20', lg: '28' }}
            flex="1"
          />
        </Stack>
      </Stack>
    </Stack>
    <Box pt="50px" textAlign={'center'}>
      <Copyright />
    </Box>
  </Box>
);

export default Footer;

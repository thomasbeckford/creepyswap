import { Box, useColorMode } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function Card(props: any) {
  const children: ReactNode = props.children;

  const { colorMode } = useColorMode();

  return (
    <Box
      {...props}
      borderRadius="0.5rem"
      bg={colorMode === 'light' ? '#fafafa' : 'gray.900'}
    >
      {children}
    </Box>
  );
}

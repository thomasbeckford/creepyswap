import { AppConfig } from '@/config';
import { Text, TextProps } from '@chakra-ui/react';
import * as React from 'react';

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} {AppConfig.site_name}
  </Text>
);

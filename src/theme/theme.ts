import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { Button, Modal, Text, Switch, Tabs } from './components';
import { globalStyles as styles } from './styles';
import { breakpoints } from './base/breakpoints';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  breakpoints,
  components: {
    Button,
    Modal,
    Text,
    Switch,
    Tabs,
  },
});

export default theme;

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { Button, Modal, Text, Switch, Select } from "./models";
import { globalStyles as styles } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  breakpoints: {
    md: "970px",
  },
  components: {
    Button,
    Modal,
    Text,
    Switch,
    Select,
  },
});

console.log(theme);

export default theme;

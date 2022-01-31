import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  global: (props: any) => ({
    body: {
      fontFamily: "'Baloo2-Medium',body",
      bg: mode(
        "gray.300",
        `url(./assets/images/stars.png) no-repeat,#000315 `
      )(props),
    },
  }),
};

import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
  global: (props: any) => ({
    body: {
      fontFamily: "'Baloo2-Medium',body",
      position: 'relative',
      minHeight: '100vh',
      // maxHeight: "100vh",

      bg: mode(
        'gray.300',
        `url(./assets/images/stars.png) ,linear-gradient(rgb(21, 30, 49) 40%, rgb(13, 14, 33) 80%) no-repeat center center fixed`,
      )(props),
    },
  }),
};

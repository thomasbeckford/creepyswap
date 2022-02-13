const Switch = {
  parts: ['container', 'track', 'thumb'],
  // style object for base or default style
  baseStyle: {
    track: {
      borderRadius: '4px',
    },
    thumb: {
      borderRadius: '4px',
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    outline: ({ colorMode }: any) => ({
      track: {
        bg: colorMode === 'dark' ? 'teal.300' : 'teal.400',
      },
      thumb: {
        bg: colorMode === 'dark' ? 'blue.300' : 'blue.400',
      },
    }),
  },
  defaultProps: {
    size: 'lg',
  },
};

export default Switch;

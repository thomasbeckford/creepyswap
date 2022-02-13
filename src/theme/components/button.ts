const Button = {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: 'md',
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  variants: {
    solid: ({ colorMode }: any) => ({
      bg: colorMode === 'dark' ? 'teal.300' : 'teal.400',
      color: colorMode === 'dark' ? '#fefefe' : '#fafafa',
    }),
    outline: ({ colorMode }: any) => ({
      borderColor: colorMode === 'dark' ? 'teal.300' : 'teal.400',
    }),
  },
};

export default Button;

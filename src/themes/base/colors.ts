export const colorValues = {
  teal: {
    400: '#60E6C5',
    600: '#1D9384',
    // TODO: Remove/rename
    ciTrans15: 'rgba(100, 221, 192, 0.15)',
    ciBorderGradient: 'linear-gradient(180deg, #22AA99 0%, #198073 100%)',
  },
  red: {
    200: '#FE9A9A',
    400: '#FF6060',
    500: '#F82F2F',
    redTrans10: 'rgba(240, 19, 19, 0.1)',
  },
  white: '#FFFFFF',
  gray: {
    100: '#D1D5DB',
    200: '#9CA3AF',
    500: '#374151',
    600: '#1F2937',
    700: '#17202F',
    800: '#101726',
    900: '#0D1321',
  },
  blue: {
    200: 'rgba(31, 41, 55, 0.95)',
    300: '#145da0',
    900: '#000315',
  },
}

// TODO Revamp naming
export const colors = {
  white: colorValues.white,
  gray: colorValues.gray[100],
  grayLight: '#101627',
  grayDarker: colorValues.gray[200],
  grayBorderBox: colorValues.gray[500],
  grayBorderToggle: colorValues.gray[600],
  green: colorValues.teal[400],
  danger: colorValues.red[500],
  dangerLight: colorValues.red[200],
  dangerBorder: colorValues.red[400],
  dangerBg: colorValues.red.redTrans10,
  mainBg: colorValues.blue[200],
}

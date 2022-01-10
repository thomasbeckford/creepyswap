import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'
import { colors, colorValues } from './base/colors'

const dark: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...colors,
    appBackground: colorValues.dark,
    cardBackground: colorValues.cardBackground,
    cardShadow: colorValues.cardShadow,
    modalBackground: colorValues.gray[800],
    navbarTitle: colorValues.gray[700],

    white: colorValues.white,
    black: colorValues.black,
    blue: colorValues.blue[500],
    darkBlue: colorValues.darkBlue[500],
    gray: colorValues.gray[500],
    lightGray: colorValues.gray[300],
    darkGray: colorValues.gray[700],
  },
}

export default dark

import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'
import { colors, colorValues } from './base/colors'

const light: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...colors,

    appBackground: colorValues.gray[500],
    cardBackground: colorValues.gray[400],
    cardShadow: colorValues.gray[600],
    modalBackground: colorValues.gray[700],
    navbarTitle: colorValues.gray[400],

    white: colorValues.white,
    black: colorValues.black,
    blue: colorValues.blue[500],
    darkBlue: colorValues.darkBlue[500],
    gray: colorValues.gray[500],
    lightGray: colorValues.gray[300],
    darkGray: colorValues.gray[700],
  },
}

export default light

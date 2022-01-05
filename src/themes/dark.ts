import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'
import { colors, colorValues } from './base/colors'

const dark: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...colors,
    ci: colorValues.teal[400],
    ciDark: colorValues.teal[600],
    ciTrans15: colorValues.teal.ciTrans15,
    ciBorderGradient: colorValues.teal.ciBorderGradient,

    background: colorValues.blue[900],
    bgBox: colorValues.gray[800],
    bgBoxDarker: colorValues.gray[900],
    bgBoxLighter: colorValues.gray[700],
    bgInput: colorValues.gray[600],
    mainBg: colorValues.blue[900],
  },
}

export default dark

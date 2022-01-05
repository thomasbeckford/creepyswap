import { DefaultTheme } from 'styled-components'
import { baseTheme } from './base'
import { colors, colorValues } from './base/colors'

const light: DefaultTheme = {
  ...baseTheme,

  colors: {
    ...colors,
    ci: colorValues.blue[300],
    ciDark: colorValues.gray[600],
    ciTrans15: colorValues.gray[700],
    ciBorderGradient: colorValues.gray[700],

    background: colorValues.blue[200],
    bgBox: colorValues.gray[800],
    bgBoxDarker: colorValues.gray[900],
    bgBoxLighter: colorValues.gray[500],
    bgInput: colorValues.gray[600],
    mainBg: colorValues.blue[200],
  },
}

export default light

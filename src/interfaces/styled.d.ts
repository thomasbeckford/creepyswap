import 'styled-components'

type BaseColors =
  | 'white'
  | 'gray'
  | 'grayLight'
  | 'grayDarker'
  | 'grayBorderBox'
  | 'grayBorderToggle'
  | 'green'
  | 'danger'
  | 'dangerLight'
  | 'dangerBorder'
  | 'dangerBg'

type ExtendedColors =
  | BaseColors
  | 'ci'
  | 'ciDark'
  | 'ciTrans15'
  | 'ciBorderGradient'
  | 'background'
  | 'bgBox'
  | 'bgBoxDarker'
  | 'bgBoxLighter'
  | 'bgInput'
  | 'mainBg'

type ExtendFonts = 'sans' | 'serif' | 'mono'
type ExtendFontWeight = 'regular' | 'medium'

type ExtendLineHeigh =
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p'
  | 'sub'

type ExtendBorderRadius = 'base' | 'xs' | 'sm' | 'md' | 'lg'
type ExtendLetterSpacing = 'normal' | 'tight'

declare module 'styled-components' {
  export interface BaseTheme {
    colors: Record<BaseColors, string>
  }

  export interface DefaultTheme extends BaseTheme {
    colors: Record<ExtendedColors, string>
    fontWeight: Record<ExtendFontWeight, number>
    fontSize: Record<any>
    lineHeight: Record<any>
    letterSpacing: Record<ExtendLetterSpacing, string>
    borderRadius: Record<ExtendBorderRadius, string>
    transitions: Record<any>
  }
}

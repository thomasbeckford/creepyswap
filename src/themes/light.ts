import { DefaultTheme } from 'styled-components';
import { baseTheme } from './../themes/base';
import { colors, colorValues } from './../themes/base/colors';

const light: DefaultTheme = {
	...baseTheme,

	colors: {
		...colors,
		ci: colorValues.teal[400],
		ciDark: colorValues.teal[600],
		ciTrans15: colorValues.teal.ciTrans15,
		ciBorderGradient: colorValues.teal.ciBorderGradient,

		background: colorValues.blue[200],
		bgBox: colorValues.gray[800],
		bgBoxDarker: colorValues.gray[900],
		bgBoxLighter: colorValues.gray[500],
		bgInput: colorValues.gray[600],
		mainBg: colorValues.blue[200],
	},
};

export default light;

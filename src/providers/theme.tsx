import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { dark, light } from './../themes';

type ThemeProviderProps = { children: React.ReactNode };

export const ThemeContext = React.createContext({
	theme: 'dark',
	toggle: () => {
		'dark';
	},
});

function useTheme() {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = React.useState('dark');

	const toggle = () => {
		setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
	};

	const values = React.useMemo(
		() => ({
			theme,
			toggle,
		}),
		[toggle, theme]
	);

	return (
		<ThemeContext.Provider value={values}>
			<StyledThemeProvider theme={theme === 'light' ? light : dark}>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	);
}

export { ThemeProvider, useTheme };

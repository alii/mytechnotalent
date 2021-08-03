const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['src/**/*.{ts,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			...defaultTheme.fontFamily,
			serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
			sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	mode: 'jit',
};

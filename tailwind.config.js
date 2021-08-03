const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['src/**/*.{ts,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			...fontFamily,
			serif: ['Cormorant Garamond', 'sans-serif'],
			sans: ['Open Sans', 'sans-serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	mode: 'jit',
};

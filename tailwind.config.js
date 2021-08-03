const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['src/**/*.{ts,tsx}'],
	darkMode: false,
	theme: {
		fontFamily: {
			...defaultTheme.fontFamily,
			mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
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

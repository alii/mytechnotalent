module.exports = {
	purge: ['src/**/*.{ts,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				timberwolf: {
					DEFAULT: '#D3D0C9',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FFFFFF',
					300: '#FFFFFF',
					400: '#EAE8E5',
					500: '#D3D0C9',
					600: '#BCB8AD',
					700: '#A59F91',
					800: '#8E8775',
					900: '#736C5D',
				},
				teal: {
					DEFAULT: '#008080',
					50: '#66FFFF',
					100: '#4DFFFF',
					200: '#1AFFFF',
					300: '#00E6E6',
					400: '#00B3B3',
					500: '#008080',
					600: '#004D4D',
					700: '#001A1A',
					800: '#000000',
					900: '#000000',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	mode: 'jit',
};

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
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	mode: 'jit',
};

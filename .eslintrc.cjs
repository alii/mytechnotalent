module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['xo', 'xo-typescript', 'xo-react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'react/function-component-definition': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-tag-spacing': 'off',
		'operator-linebreak': 'off',
	},
	ignorePatterns: ['dist', '**/*.cjs', '**/*.js'],
};

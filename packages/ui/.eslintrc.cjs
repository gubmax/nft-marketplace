module.exports = {
  root: true,
	env: { browser: true },
	extends: [
		'@nft-marketplace/eslint-config',
		'plugin:react/recommended',
	],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
	settings: {
		react: { version: 'detect' },
	},
	rules: {
		// Base
		'jsx-quotes': ['error', 'prefer-double'],
		// React
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off'
	},
};

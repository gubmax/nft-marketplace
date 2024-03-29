module.exports = {
	root: true,
	env: { node: true, browser: true },
	extends: [
		'@nft-marketplace/eslint-config',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: { jsx: true },
		project: ['./tsconfig.json', './tsconfig.node.json'],
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
		'react/react-in-jsx-scope': 'off',
		// Disabling using of useLayoutEffect from react
		'react-hooks/exhaustive-deps': ['warn', { additionalHooks: 'useEnhancedEffect' }],
		'no-restricted-imports': [
			'error',
			{
				name: 'react',
				importNames: ['useLayoutEffect'],
				message: '"useLayoutEffect" causes a warning in SSR. Use "useEnhancedEffect"',
			},
		],
	},
	overrides: [
		{
			files: 'client/**/*',
			env: { browser: true, node: false },
			extends: 'plugin:react-hooks/recommended',
		},
	],
}

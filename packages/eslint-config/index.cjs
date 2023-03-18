module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', 'simple-import-sort'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		// Base
		'object-curly-spacing': ['error', 'always'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'@typescript-eslint/no-invalid-void-type': 'off',
		'@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
		// Pretier
		'prettier/prettier': 'error',
		// Import and exports sort
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
          ['^node:', `^(${require('module').builtinModules.join('|')})(/|$)`],
          ['^react', '^@?\\w'],
          ['^(client|server|shared|plugins)(/.*|$)', '^\\.', '^.+\\.css$'],
				],
			},
		],
	},
	ignorePatterns: ['dist', 'node_modules', '*.cjs'],
}

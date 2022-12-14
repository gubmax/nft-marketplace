module.exports = {
	env: {
		node: true,
	},
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
					[
						'^node:',
						'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
					],
					['^react', '^'],
					['^(client|server|shared)(/.*|$)', '^\\.', '^.+\\.css$'],
				],
			},
		],
	},
	ignorePatterns: ['dist', 'node_modules'],
}

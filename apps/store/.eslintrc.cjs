module.exports = {
	root: true,
	env: { node: true },
	extends: '@nft-marketplace/eslint-config',
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
}

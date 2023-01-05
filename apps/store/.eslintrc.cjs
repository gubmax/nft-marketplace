module.exports = {
	root: true,
	extends: '@nft-marketplace/eslint-config',
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
}

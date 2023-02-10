module.exports = {
	plugins: [
		require('postcss-import')({ plugins: [require('stylelint')] }),
		require('autoprefixer'),
		require('postcss-custom-media'),
		require('postcss-nested'),
		require('postcss-pxtorem')({
			mediaQuery: true,
			propList: ['*'],
			rootValue: 16,
		}),
		require('postcss-simple-vars'),
		require('postcss-reporter')({ clearReportedMessages: true }),
	],
}

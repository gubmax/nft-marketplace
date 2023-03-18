module.exports = {
	plugins: [
		require('postcss-import')({ plugins: [require('stylelint')] }),
		require('postcss-mixins'),
		require('postcss-custom-media'),
		require('postcss-simple-vars'),
		require('postcss-nested'),
		require('autoprefixer'),
		require('postcss-pxtorem')({
			mediaQuery: true,
			propList: ['*'],
			rootValue: 16,
		}),
		require('postcss-reporter')({ clearReportedMessages: true }),
	],
}

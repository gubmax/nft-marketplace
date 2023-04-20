module.exports = {
	plugins: [
		require('postcss-import')({ plugins: [require('stylelint')] }),
		require('postcss-nested'),
		require('postcss-simple-vars'),
		require('postcss-mixins'),
		require('postcss-custom-media'),
		require('autoprefixer'),
		require('postcss-reporter')({ clearReportedMessages: true }),
	],
}

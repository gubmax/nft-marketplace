module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
	rules: {
		'selector-class-pattern': null,
		'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin', 'unocss'] }],
	},
}

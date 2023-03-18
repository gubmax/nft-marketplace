module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order', 'stylelint-config-prettier'],
	rules: {
		'selector-class-pattern': null,
		'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
	},
}

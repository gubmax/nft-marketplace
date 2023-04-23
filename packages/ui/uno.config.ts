import presetMini from '@unocss/preset-mini'
import { defineConfig } from 'unocss'

export default defineConfig({
	presets: [presetMini({ variablePrefix: 'ui-' })],
	theme: {
		fontSize: {
			'display-lg': ['57px', '64px'],
			'display-md': ['45px', '52px'],
			'display-sm': ['35px', '44px'],
			'headline-lg': ['32px', '40px'],
			'headline-md': ['28px', '36px'],
			'headline-sm': ['24px', '32px'],
			'title-lg': ['22px', '28px'],
			'title-md': ['16px', '24px'],
			'title-sm': ['14px', '20px'],
			'label-lg': ['14px', '20px'],
			'label-md': ['12px', '16px'],
			'label-sm': ['11px', '16px'],
			'body-lg': ['16px', '24px'],
			'body-md': ['14px', '20px'],
			'body-sm': ['12px', '16px'],
		},
		colors: {
			// System
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			// Palette
			primary: 'var(--color-primary)',
			secondary: 'var(--color-secondary)',
			tertiary: 'var(--color-tertiary)',
			background: 'var(--color-background)',
			surface: 'var(--color-surface)',
			error: 'var(--color-error)',
			glass: 'var(--color-glass)',
			outline: {
				'': 'var(--color-outline)',
				variant: 'var(--color-outline-variant)',
			},
			on: {
				background: 'var(--color-on-background)',
				surface: 'var(--color-on-surface)',
				error: 'var(--color-on-error)',
				outline: 'var(--color-on-outline)',
			},
		},
	},
})

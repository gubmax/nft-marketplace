import presetMini from '@unocss/preset-mini'
import { defineConfig } from 'unocss'

export default defineConfig({
	presets: [presetMini({ variablePrefix: 'ui-' })],
	theme: {
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

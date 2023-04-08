import { Preview } from '@storybook/react';

import { dark, light } from './themes'

import '../src/styles/globals.css'

const preview: Preview = {
	parameters: {
		controls: { expanded: true },
		actions: { argTypesRegex: '^on[A-Z].*' },
		backgrounds: { disable: true },
		darkMode: {
			current: 'dark',
			dark,
			light,
			stylePreview: true,
		},
		docs: { theme: dark },
		layout: 'centered',
	}
};

export default preview;

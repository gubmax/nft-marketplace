import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite',
  },
	async viteFinal(config) {
    config.plugins?.push(tsconfigPaths())
		config.css = { modules: { localsConvention:  'camelCaseOnly' }}

		if (config.build) {
			config.base = '';
			config.build.assetsDir = 'assets/';
		}

		return config;
	}
}

export default config

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
  features: { storyStoreV7: true },
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite',
  },
}

export default config

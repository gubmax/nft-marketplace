export const ENV_CONFIG = {
  isTest: process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD,
  isProd: process.env.NODE_ENV === 'production',
  port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000,
  host: process.env.HOST ?? 'http://localhost',
}

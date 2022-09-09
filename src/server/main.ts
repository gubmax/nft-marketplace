import { bootstrap } from './bootstrap'

const SERVER_PORT = 5000
const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

// Bootstrap
if (!isTest) {
  const { server } = await bootstrap({ isProd })

  server.listen({ port: SERVER_PORT }, () => {
    console.log(`http://localhost:${SERVER_PORT}`)
  })
}

// For tests
export default bootstrap

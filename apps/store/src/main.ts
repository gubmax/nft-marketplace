import { bootstrap } from './bootstrap.js'

const { server } = bootstrap()
await server.listen({ port: 4000 })

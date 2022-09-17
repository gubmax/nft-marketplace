import nodemon from 'nodemon';
import pc from 'picocolors'

nodemon({
  exec: 'tsx ./src/server/main.ts',
  ext: 'ts,tsx,json',
  ignore: ['*/node_modules/.vite'],
  quiet: true,
  watch: ['src/server/', 'src/shared/']
})
  .on('start', () => console.warn(pc.yellow('Starting server...')))
  .on('restart', () => console.warn(pc.yellow('Server reload...')))

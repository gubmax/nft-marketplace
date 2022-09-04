import { build } from 'esbuild'

const ENTRY_MAIN = 'server.ts'
const OUTFILE_NAME = 'index.js'

console.log(`esbuild | building server for production...`)

build({
  platform: 'node',
  target: 'node16',
  sourcemap: false,
  entryPoints: [ENTRY_MAIN],
  outfile: './dist/server.js',
  format: 'esm',
  tsconfig: './tsconfig.json',
})
  .then(() => {
    console.log('outfile')
    console.log(`  ${OUTFILE_NAME}`)
  })
  .catch(() => process.exit())

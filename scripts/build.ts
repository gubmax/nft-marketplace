import { build } from 'esbuild'

import packageJson from '../package.json'

const ENTRY_MAIN = 'server.ts'
const OUTFILE_NAME = 'index.js'

function getExternal(
  packages: Record<string, boolean | string | string[] | Record<string, unknown>>,
): string[] {
  return Object.keys(packages).reduce<string[]>((acc, key) => {
    if (key.includes('ependencies')) {
      acc.push(...Object.keys(packages[key]))
    }

    return acc
  }, [])
}

console.log(`esbuild | building server for production...`)

build({
  platform: 'node',
  target: 'node16',
  bundle: true,
  sourcemap: false,
  external: getExternal(packageJson),
  entryPoints: [ENTRY_MAIN],
  outfile: './dist/server.js',
  format: 'esm',
  tsconfig: './tsconfig.json',
})
  .then(() => {
    console.log(`outfile: ${OUTFILE_NAME}`)
  })
  .catch(() => process.exit())

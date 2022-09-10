import { build } from 'esbuild'

import packageJson from '../package.json'

process.env.NODE_ENV = 'production'

const OUTFILE = './dist/server/index.js'

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

console.log(`esbuild building server for production...`)

build({
  platform: 'node',
  target: 'node16',
  bundle: true,
  sourcemap: false,
  external: getExternal(packageJson),
  entryPoints: ['./src/server/main.ts'],
  outfile: OUTFILE,
  format: 'esm',
  tsconfig: './tsconfig.node.json',
})
  .then(() => console.log(OUTFILE))
  .catch(() => process.exit())

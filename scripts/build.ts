import { build } from 'esbuild'
import pc from 'picocolors'

import packageJson from '../package.json'

process.env.NODE_ENV = 'production'

const OUTFILE = 'index.js'

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

console.log(`${pc.cyan('esbuild')} ${pc.green('building server for production...')}`)

build({
  platform: 'node',
  target: 'node16',
  bundle: true,
  sourcemap: false,
  external: getExternal(packageJson),
  entryPoints: ['./src/server/main.ts'],
  outfile: `./dist/server/${OUTFILE}`,
  format: 'esm',
  tsconfig: './tsconfig.node.json',
})
  .then(() => console.log(`${pc.dim(`dist/server/`)}${OUTFILE}`))
  .catch(() => process.exit())

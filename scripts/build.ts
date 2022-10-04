import { builtinModules } from 'node:module'

import { build } from 'esbuild'
import pc from 'picocolors'

import pkg from '../package.json'

process.env.NODE_ENV = 'production'

console.log(`${pc.cyan('esbuild')} ${pc.green('building server for production...')}`)

const OUTFILE = 'index.js'

build({
  platform: 'node',
  target: 'node16',
  bundle: true,
  sourcemap: false,
  external: [
    ...builtinModules,
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
  ],
  entryPoints: ['./src/server/main.ts'],
  outfile: `./dist/server/${OUTFILE}`,
  format: 'esm',
  tsconfig: './tsconfig.node.json',
})
  .then(() => console.log(`${pc.dim('dist/server/')}${OUTFILE}`))
  .catch(() => process.exit())

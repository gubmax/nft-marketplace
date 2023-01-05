import nodemon from 'nodemon'
import pc from 'picocolors'

console.log(pc.dim('Watcher enabled. To restart at any time, enter "rs"'))

nodemon({
	exec: 'tsx ./src/main.ts',
	ext: 'ts,tsx,json',
	watch: ['src/'],
})
	.on('restart', () => console.warn(pc.yellow('Server reload...')))
	.on('quit', () => process.exit())

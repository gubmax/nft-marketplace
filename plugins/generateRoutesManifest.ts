import fs from 'node:fs'

import { Plugin } from 'vite'

const PATH_ROUTES_FOLDER = 'src/client/pages'

interface Route {
  id: string
  path: string
  children: Route[]
}

function generateRoutes(routes: Route[], rootFolder: string, prefix = '/') {
  const direntArr = fs.readdirSync(`./${rootFolder}${prefix}`, { withFileTypes: true })
  const folderArr: fs.Dirent[] = []

  for (const dirent of direntArr) {
    if (dirent.isDirectory()) {
      folderArr.push(dirent)
      continue
    }

    const { name } = dirent
    const id = `${rootFolder}${prefix}${name}`

    const end = name.endsWith('index.tsx') ? name.indexOf('index.tsx') - 1 : name.indexOf('.tsx')
    const subpath = name.substring(0, end)

    routes.push({ id, path: `${prefix}${subpath}`, children: [] })
  }

  for (const { name } of folderArr) {
    const currentName = `${prefix}${name}`
    const parent = routes.find(({ path }) => path.includes(currentName))
    generateRoutes(parent?.children ?? routes, rootFolder, `${currentName}/`)
  }
}

export function generateRoutesManifest(): Plugin {
  const virtualModuleId = 'virtual:routes-manifest'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  let routes: Route[] = []

  return {
    name: 'routes-manifest',
    enforce: 'pre',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId
    },
    configureServer(server) {
      server.watcher.on('all', (eventName, path) => {
        if (eventName !== 'change' && path.includes(`/${PATH_ROUTES_FOLDER}`)) {
          const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
          if (mod) void server.reloadModule(mod)
        }
      })
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        routes = []
        generateRoutes(routes, PATH_ROUTES_FOLDER)
        return `export const routes = ${JSON.stringify(routes)}`
      }
    },
    closeBundle() {
      fs.writeFileSync('./dist/server/routes.manifest.json', JSON.stringify(routes))
    },
  }
}

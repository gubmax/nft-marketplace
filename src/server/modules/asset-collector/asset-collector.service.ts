import { Manifest, ModuleNode } from 'vite'

export interface EntryRouteAssets {
  links: Array<Record<string, unknown>>
  scripts: Array<Record<string, unknown>>
}

export class AssetCollectorService {
  private getFileProps(file: string, isEntry = false): Record<string, unknown> | null {
    if (file.endsWith('.js')) {
      if (isEntry) return { type: 'module', crossOrigin: '', src: file }
      else return { rel: 'modulepreload', crossOrigin: '', href: file }
    } else if (file.endsWith('.css')) return { rel: 'stylesheet', crossOrigin: '', href: file }
    else if (file.endsWith('.woff'))
      return { rel: 'preload', href: file, as: 'font', type: 'font/woff', crossorigin: '' }
    else if (file.endsWith('.woff2'))
      return { rel: 'preload', href: file, as: 'font', type: 'font/woff2', crossorigin: '' }
    else if (file.endsWith('.gif'))
      return { rel: 'preload', href: file, as: 'image', type: 'image/gif' }
    else if (file.endsWith('.jpg') || file.endsWith('.jpeg'))
      return { rel: 'preload', href: file, as: 'image', type: 'image/jpeg' }
    else if (file.endsWith('.png'))
      return { rel: 'preload', href: file, as: 'image', type: 'image/png' }
    else return null
  }

  collectByModule(mod?: ModuleNode): EntryRouteAssets {
    const assetsAcc: EntryRouteAssets = { links: [], scripts: [] }

    if (!mod) return assetsAcc

    const seen = new Set()

    const collect = (m: ModuleNode) => {
      if (!m.id || seen.has(m.id)) return

      seen.add(m.id)

      if (m.file?.includes('.css')) {
        const link = this.getFileProps(m.url)
        if (link) assetsAcc.links.push(link)
      }

      m.importedModules.forEach((importedMod) => collect(importedMod))
    }

    collect(mod)

    return assetsAcc
  }

  collectByManifest(manifest: Manifest, path: string): EntryRouteAssets {
    const assetsAcc: EntryRouteAssets = { links: [], scripts: [] }
    const seen = new Set('')

    const collect = (p: string) => {
      if (seen.has(p)) return

      seen.add(p)

      const { isEntry, file, css = [], assets = [], imports = [] } = manifest[p]

      for (const url of [file, ...css, ...assets]) {
        const link = this.getFileProps(`/${url}`, isEntry)
        if (link) {
          if (url.endsWith('.js')) assetsAcc.scripts.push(link)
          else assetsAcc.links.push(link)
        }
      }

      for (const assetPath of imports) collect(assetPath)
    }

    collect(path)

    return assetsAcc
  }
}

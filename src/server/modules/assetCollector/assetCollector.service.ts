import { Manifest, ModuleNode } from 'vite'

interface GetPreloadLinkOptions {
  file: string
  isEntry?: boolean
  withSsrAttr?: boolean
}

export class AssetCollectorService {
  private getPreloadLink({
    file,
    isEntry = false,
  }: GetPreloadLinkOptions): Record<string, unknown> | null {
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

  collectPreloadLinksByModule(mod?: ModuleNode): Array<Record<string, unknown>> {
    if (!mod) return []

    const links: Array<Record<string, unknown>> = []
    const seen = new Set()

    const collect = (m: ModuleNode) => {
      if (!m.id || seen.has(m.id)) return

      seen.add(m.id)

      const link = this.getPreloadLink({ file: m.id, isEntry: false, withSsrAttr: true })
      if (link) links.push(link)

      m.importedModules.forEach((importedMod) => collect(importedMod))
    }

    collect(mod)

    return links
  }

  collectPreloadLinksByManifest(manifest: Manifest, path: string): Array<Record<string, unknown>> {
    const links: Array<Record<string, unknown>> = []
    const seen = new Set('')

    const collect = (p: string) => {
      if (seen.has(p)) return

      seen.add(p)

      const { file, isEntry, imports = [], dynamicImports = [], css = [] } = manifest[p]

      if (file) {
        const link = this.getPreloadLink({ file: `/${file}`, isEntry })
        if (link) links.push(link)
      }

      if (css.length) {
        css.forEach((url) => {
          const link = this.getPreloadLink({ file: `/${url}`, isEntry })
          if (link) links.push(link)
        })
      }

      for (const assetPath of imports) collect(assetPath)
      for (const assetPath of dynamicImports) collect(assetPath)
    }

    collect(path)

    return links
  }
}

import { Manifest, ModuleNode } from 'vite'

export class AssetCollectorService {
  private getPreloadLink(file: string, isEntry = false): string {
    const link = `/${file}`

    if (link.endsWith('.js')) {
      if (isEntry) return `<script type="module" crossorigin src="${link}"></script>`
      else return `<link rel="modulepreload" crossorigin href="${link}">`
    } else if (link.endsWith('.css')) return `<link rel="stylesheet" href="${link}">`
    else if (link.endsWith('.woff'))
      return `<link rel="preload" href="${link}" as="font" type="font/woff" crossorigin>`
    else if (link.endsWith('.woff2'))
      return `<link rel="preload" href="${link}" as="font" type="font/woff2" crossorigin>`
    else if (link.endsWith('.gif'))
      return `<link rel="preload" href="${link}" as="image" type="image/gif">`
    else if (link.endsWith('.jpg') || link.endsWith('.jpeg'))
      return `<link rel="preload" href="${link}" as="image" type="image/jpeg">`
    else if (link.endsWith('.png'))
      return `<link rel="preload" href="${link}" as="image" type="image/png">`
    else return ''
  }

  collectPreloadLinksByModule(mod?: ModuleNode): string {
    if (!mod) return ''

    let links = ''
    const seen = new Set()

    const collect = (m: ModuleNode) => {
      if (!m.id || seen.has(m.id)) return

      seen.add(m.id)

      links += this.getPreloadLink(m.url)

      m.importedModules.forEach((importedMod) => {
        collect(importedMod)
      })
    }

    collect(mod)

    return links
  }

  collectPreloadLinksByManifest(manifest: Manifest, path: string): string {
    let links = ''
    const seen = new Set('')

    const collect = (p: string) => {
      if (seen.has(p)) return

      const { file, isEntry, imports = [], css = [] } = manifest[p]

      seen.add(p)

      if (file) {
        links += this.getPreloadLink(file, isEntry)
      }

      if (css.length) {
        css.forEach((url) => (links += this.getPreloadLink(url, isEntry)))
      }

      for (const assetPath of imports) {
        collect(assetPath)
      }
    }

    collect(path)

    return links
  }
}

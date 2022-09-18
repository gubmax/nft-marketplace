import { Manifest, ModuleNode } from 'vite'

export class AssetCollectorService {
  private getPreloadLink(file: string): string {
    if (file.endsWith('.js')) return `<link rel='modulepreload' crossorigin href='${file}'>`
    else if (file.endsWith('.css')) return `<link rel='stylesheet' href='${file}'>`
    else if (file.endsWith('.woff'))
      return `<link rel='preload' href='${file}' as='font' type='font/woff' crossorigin>`
    else if (file.endsWith('.woff2'))
      return `<link rel='preload' href='${file}' as='font' type='font/woff2' crossorigin>`
    else if (file.endsWith('.gif'))
      return `<link rel='preload' href='${file}' as='image' type='image/gif'>`
    else if (file.endsWith('.jpg') || file.endsWith('.jpeg'))
      return `<link rel='preload' href='${file}' as='image' type='image/jpeg'>`
    else if (file.endsWith('.png'))
      return `<link rel='preload' href='${file}' as='image' type='image/png'>`
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

      const { file, imports = [], css = [] } = manifest[p]

      seen.add(p)

      if (file) {
        links += this.getPreloadLink(file)
      }

      if (css.length) {
        css.forEach((url) => (links += this.getPreloadLink(url)))
      }

      for (const assetPath of imports) {
        collect(assetPath)
      }
    }

    collect(path)

    return links
  }
}

import { cloneElement, ReactElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export class HeadExtractor {
  #tags = new Set<ReactElement>()

  renderStatic(): string {
    let markup = ''

    for (const el of this.#tags) {
      markup += renderToStaticMarkup(el)
    }

    return markup
  }

  private enchanceEl = (el: ReactElement) => cloneElement(el, { 'data-ssr': '' })

  addServerTag = (el: ReactElement | ReactElement[] | undefined): void => {
    if (!el) return
    if (Array.isArray(el)) el.forEach((item) => this.#tags.add(this.enchanceEl(item)))
    else this.#tags.add(this.enchanceEl(el))
  }
}

import { renderToString } from 'react-dom/server'
import { createMemoryRouter } from 'react-router-dom'

import { HeadExtractor } from 'client/modules/head'
import { App } from 'client/modules/layout/app'
import { ROUTES } from 'client/routes'
import 'client/common/styles/global.css'

interface RenderOptions {
  url: string
  headExtractor: HeadExtractor
}

export function render({ url, headExtractor }: RenderOptions): string {
  const router = createMemoryRouter(ROUTES, { initialEntries: [url] })

  return renderToString(<App router={router} headExtractor={headExtractor} />)
}

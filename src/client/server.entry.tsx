import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { HeadExtractor, HeadProvider } from './modules/head'
import { App } from './modules/layout'
import './common/styles/reset.css'
import './common/styles/global.css'

interface RenderOptions {
  url: string
  headExtractor: HeadExtractor
}

export function render({ url, headExtractor }: RenderOptions): string {
  return renderToString(
    <StaticRouter location={url}>
      <HeadProvider extractor={headExtractor}>
        <App />
      </HeadProvider>
    </StaticRouter>,
  )
}

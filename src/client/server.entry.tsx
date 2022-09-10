import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { App } from './modules/layout'
import './common/styles/reset.css'
import './common/styles/global.css'

export function render({ url }: { url: string }): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
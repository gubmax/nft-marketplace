import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { HeadProvider } from '../modules/head'
import { App } from '../modules/layout/app'
import '../common/styles/reset.css'
import '../common/styles/global.css'

hydrateRoot(
  document.getElementById('app') ?? document.body,
  <BrowserRouter>
    <HeadProvider>
      <App />
    </HeadProvider>
  </BrowserRouter>,
)

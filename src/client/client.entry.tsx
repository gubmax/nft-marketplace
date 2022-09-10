import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './modules/layout'
import './common/styles/reset.css'
import './common/styles/global.css'

hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

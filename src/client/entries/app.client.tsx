import { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'

import { reportWebVitals } from 'client/common/utils/reportWebVitals'
import { App } from 'client/modules/layout/app'
import { ROUTES } from 'client/routes'
import 'client/common/styles/global.css'

const router = createBrowserRouter(ROUTES)

hydrateRoot(document.getElementById('app') ?? document.body, <App router={router} />)

if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log)
}

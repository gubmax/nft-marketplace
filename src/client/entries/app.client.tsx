import { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'

import { App } from 'client/modules/layout/app'
import { ROUTES } from 'client/routes'
import 'client/common/styles/global.css'

const router = createBrowserRouter(ROUTES)

hydrateRoot(document.getElementById('app') ?? document.body, <App router={router} />)

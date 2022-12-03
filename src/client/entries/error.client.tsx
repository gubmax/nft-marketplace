import { hydrateRoot } from 'react-dom/client'

import { Error } from 'client/modules/features/error'
import 'client/common/styles/global.css'

hydrateRoot(document.getElementById('app') ?? document.body, <Error />)

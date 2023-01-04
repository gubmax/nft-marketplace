import NotFound from 'client/modules/features/not-found/not-found.js'
import { MetaFunction } from './modules/entry-route/modules.js'

export const meta: MetaFunction = () => ({ title: 'Page not found' })

function NotFoundPage() {
  return <NotFound />
}

export default NotFoundPage

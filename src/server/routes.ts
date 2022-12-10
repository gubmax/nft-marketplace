import { PageRoutes } from 'server/common/constants'

interface PageOptions {
  name: string
}

export const ROUTES: Record<string, PageOptions> = {
  [PageRoutes.HOME]: { name: 'home' },
  [PageRoutes.ABOUT]: { name: 'about' },
  [PageRoutes.COLLECTION]: { name: 'collection' },
  [PageRoutes.GAMING]: { name: 'gaming' },
  [PageRoutes.HELP]: { name: 'help' },
  [PageRoutes.MARKETPLACE]: { name: 'marketplace' },
  [PageRoutes.COLLECTION]: { name: 'collection' },
  [PageRoutes.SALES]: { name: 'sales' },
  [PageRoutes.SCHEDULE]: { name: 'schedule' },
  [PageRoutes.SETTINGS]: { name: 'settings' },
  [PageRoutes.SIGN_IN]: { name: 'sign-in' },
  [PageRoutes.SIGN_UP]: { name: 'sign-up' },
}

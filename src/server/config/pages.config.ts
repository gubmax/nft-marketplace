import { PageRoutes } from 'server/common/constants'

interface PageOptions {
  name: string
  // getServerSideProps: Function
}

export const PAGES_CONFIG: Record<string, PageOptions> = {
  [PageRoutes.HOME]: {
    name: 'home',
  },
  [PageRoutes.ABOUT]: {
    name: 'about',
  },
  [PageRoutes.MARKETPLACE]: {
    name: 'marketplace',
  },
} as const

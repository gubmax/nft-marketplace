import { PageRoutes } from 'shared/routes'

interface PageOptions {
  name: string
  // getServerSideProps: Function
}

export const PAGES_CONFIG: Record<PageRoutes, PageOptions | undefined> = {
  [PageRoutes.HOME]: {
    name: 'home',
  },
  [PageRoutes.ABOUT]: {
    name: 'about',
  },
} as const

/// <reference types="vite/client" />

interface Route {
  id: string
  path: string
  children: Route[]
}

declare module 'virtual:routes-manifest' {
  export const routes: Route[]
}

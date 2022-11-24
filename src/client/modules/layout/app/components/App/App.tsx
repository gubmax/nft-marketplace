import { StrictMode } from 'react'
import { RouterProvider, RouterProviderProps } from 'react-router-dom'

import { useSsrDataRemoval } from 'client/common/hooks/useSsrDataRemoval'
import { HeadExtractor, HeadProvider } from 'client/modules/head'
import { CommonSvg } from '../CommonSvg'

export interface AppProps {
  router: RouterProviderProps['router']
  headExtractor?: HeadExtractor
}

function App({ headExtractor, router }: AppProps) {
  useSsrDataRemoval()

  return (
    <StrictMode>
      <HeadProvider extractor={headExtractor}>
        <RouterProvider router={router} />
      </HeadProvider>
      <CommonSvg />
    </StrictMode>
  )
}

export default App

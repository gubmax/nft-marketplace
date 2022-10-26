import { memo } from 'react'

import { useDocumentTitle } from 'client/common/hooks/useDocumentTitle'
import { NotFound } from 'client/modules/notFound'
import * as s from './NotFound.css'

const PAGE_TITLE = 'Page Not Found'

function NotFoundPage() {
  useDocumentTitle(PAGE_TITLE)

  return <NotFound className={s.wrapper} />
}

export default memo(NotFoundPage)

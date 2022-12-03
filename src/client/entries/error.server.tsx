import { renderToString } from 'react-dom/server'

import { Error } from 'client/modules/features/error'
import 'client/common/styles/global.css'

export function render(): string {
  return renderToString(<Error />)
}

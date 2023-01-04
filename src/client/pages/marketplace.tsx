import { useOutlet } from 'react-router-dom'

import Marketplace from 'client/modules/features/marketplace/marketplace.js'

export default function MarketplacePage() {
  const childRoute = useOutlet()

  return <Marketplace>{childRoute}</Marketplace>
}

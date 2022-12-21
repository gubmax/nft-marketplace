import Tip from 'client/common/components/surfaces/tip/tip.js'
import AuthBanner from 'client/modules/features/marketplace/auth-banner/auth-banner.js'

function ShowcasePage() {
  return (
    <>
      <AuthBanner className="mb-5" />
      <Tip>Edit some page and save to test HMR</Tip>
    </>
  )
}

export default ShowcasePage

import PageTitle from 'client/common/components/elements/page/page-title.js'
import PageWrapper from 'client/common/components/elements/page/page-wrapper/page-wrapper.js'
import About from 'client/modules/features/about.js'

const PAGE_TITLE = 'About'

export const head = () => `
<title>${PAGE_TITLE}</title>
`

function AboutPage() {
  return (
    <PageWrapper>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <About />
    </PageWrapper>
  )
}

export default AboutPage

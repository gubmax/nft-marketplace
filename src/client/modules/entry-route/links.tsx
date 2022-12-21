import { useEntryRouteContext } from 'client/modules/entry-route/entry-route.context.js'

function Links() {
  const { prefetchLinks } = useEntryRouteContext()

  return (
    <>
      {prefetchLinks.map(({ content, ...rest }, index) => {
        if (rest.type === 'application/json')
          return <script key={index} {...rest} dangerouslySetInnerHTML={{ __html: content }} />
        if (rest.type === 'module') return <script key={index} {...rest} />
        return <link key={index} {...rest} />
      })}
    </>
  )
}

export default Links

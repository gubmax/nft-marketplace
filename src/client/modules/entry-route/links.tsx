import { useEntryRouteContext } from 'client/modules/entry-route/entry-route.context.js'

function Links() {
  const { links } = useEntryRouteContext()

  return (
    <>
      {links.map((props, index) => (
        <link key={index} {...props} />
      ))}
    </>
  )
}

export default Links

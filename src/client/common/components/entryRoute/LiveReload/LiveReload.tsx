function LiveReload() {
  if (import.meta.env.PROD) return null

  const js = String.raw
  return (
    <script
      type="module"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: js`
          import RefreshRuntime from "/@react-refresh"
          RefreshRuntime.injectIntoGlobalHook(window)
          window.$RefreshReg$ = () => {}
          window.$RefreshSig$ = () => (type) => type
          window.__vite_plugin_react_preamble_installed__ = true
        `,
      }}
    />
  )
}

export default LiveReload

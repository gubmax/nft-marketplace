interface AppTemplateOptions {
  head?: string
  appHtml: string
  body?: string
}

export function getAppTemplate({ head = '', appHtml, body = '' }: AppTemplateOptions): string {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  ${head}
  <body>
    <div id="app">${appHtml}</div>
    ${body}
  </body>
</html>
  `
}

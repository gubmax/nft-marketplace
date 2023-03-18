# 💎 NFT Marketplace

This monorepository is a fullstack application containing a modern React web app, server-side rendering, tooling, and APIs.

The frontend is made without the use of frameworks like Next.js and Remix (for fun).

The package manager used to install and link dependencies must be [pnpm](https://pnpm.io).

Bootstrapped with [Vite](https://github.com/vitejs/vite.git).

## Some features

### Frontend:
- File-system Routing. Every component in the "pages" directory becomes a route.
- Island based hydration and streaming Server-Side Rendering (SSR). This allows you to incrementally render parts of your UI to the client.

## Setup

### Development сontainer
A **development container** is a running container with a well-defined tool/runtime stack and its prerequisites.

Check out the [docs](https://code.visualstudio.com/docs/devcontainers/containers) to get started.

### To develop package locally or inside development container:
```sh
pnpm i
pnpm codegen
pnpm migrate.dev
pnpm dev
```

## Update Packages
Via [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
```sh
npx npm-check-updates --deep --upgrade
```

## Inspiration

- [vercel/next.js](https://github.com/vercel/next.js)
- [remix-run/remix](https://github.com/remix-run/remix)
- [denoland/fresh](https://github.com/denoland/fresh)

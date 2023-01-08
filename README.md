# 💎 NFT Marketplace

This monorepository is a fullstack application containing a modern React web app, server-side rendering, tooling, and APIs.

The frontend is made without the use of frameworks like Next.js and Remix (for fun).

Bootstrapped with [Vite](https://github.com/vitejs/vite.git).

## Some features
### Frontend:
- File-system Routing. Every component in the "pages" directory becomes a route.
- Island based hydration and streaming Server-Side Rendering (SSR). This allows you to incrementally render parts of your UI to the client.

## Setup
The package manager used to install and link dependencies must be [pnpm](https://pnpm.io).

To develop package:
1. Run `pnpm i` in root folder.
2. Run `pnpm dev` in root folder.

## Inspiration
- [vercel/next.js](https://github.com/vercel/next.js)
- [remix-run/remix](https://github.com/remix-run/remix)
- [denoland/fresh](https://github.com/denoland/fresh)

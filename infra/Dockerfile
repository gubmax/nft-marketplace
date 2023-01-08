FROM node:16-alpine as marketplace

ENV CI 1
ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3000

WORKDIR /app

RUN npm install -g pnpm@7.22.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
  pnpm fetch

COPY . .

RUN pnpm set-script prepare ""
RUN pnpm install --offline
RUN pnpm run build

WORKDIR /app/apps/marketplace
USER node
EXPOSE $PORT

CMD ["node", "dist/server"]

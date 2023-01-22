FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:16

ENV CI 0
ENV NODE_ENV development

WORKDIR /workspace

RUN apt-get -y install git

RUN chmod -R 777 .

RUN npm install -g pnpm@7.22.0
RUN pnpm config set store-dir /workspace/.pnpm-store

CMD [ "sleep", "infinity" ]

FROM node:26.1.0-alpine3.23 AS run
WORKDIR /app
COPY package.json package-lock.json .
RUN npm ci
COPY prisma/ prisma/
COPY prisma.config.ts .
COPY public/ public/
COPY src/ src/
COPY ./entrypoint.sh .
COPY bin/ bin/
ENTRYPOINT ["./entrypoint.sh"]
CMD ["npx", "tsx", "bin/node.ts"]

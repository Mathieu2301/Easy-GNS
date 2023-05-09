FROM node:lts-hydrogen

LABEL org.opencontainers.image.source=https://github.com/mathieu2301/easy-gns

WORKDIR /app
COPY . .

CMD ["node", "main.js"]

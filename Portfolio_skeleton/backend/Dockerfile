FROM node:16.0.0-alpine3.11

LABEL version="0.0.1"
LABEL description="Nicode.IO Base backend API image"
LABEL maintainer ="nicolas@nicode.io"

WORKDIR /portfolio_api

ENV PATH /portfolio_api/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./


EXPOSE 5000

CMD ["node", "app.js"]

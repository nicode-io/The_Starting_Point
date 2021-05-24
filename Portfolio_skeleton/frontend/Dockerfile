FROM  node:16.0.0-alpine3.11

LABEL version="0.0.1"
LABEL description="Nicode.IO Base frontend image"
LABEL maintainer ="nicolas@nicode.io"

WORKDIR /portfolio_front

ENV PATH /portfolio_front/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

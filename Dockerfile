FROM node:20-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD npm run deploy && node index.js

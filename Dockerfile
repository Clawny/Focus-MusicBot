FROM node:20-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
# We combine the deployment and startup into the final execution command
CMD npm run deploy && node index.js

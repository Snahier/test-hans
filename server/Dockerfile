FROM node:12-alpine

WORKDIR /server
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3333

CMD ["npm", "run", "start"]
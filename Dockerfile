FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5080

CMD ["npm", "start"]
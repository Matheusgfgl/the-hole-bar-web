FROM node:16.14.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:homolog

EXPOSE 5173

CMD ["npm", "run", "dev"]
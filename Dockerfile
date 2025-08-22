# Use Node.js LTS
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY ./src/index.js /app
COPY .env /app
RUN pwd 
RUN ls -ltrh

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

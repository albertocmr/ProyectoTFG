FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

COPY ./src/assets/coordinates /app/shared-data/coordinates
RUN mkdir -p /app/shared-data/routes

EXPOSE 8001

CMD ["npm", "run", "dev", "--", "--host"]


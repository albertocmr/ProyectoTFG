# Usa una imagen base de Node.js
FROM node:18-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias y luego instala
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copia el resto de la aplicación
COPY . .

# Copia los archivos del frontend a la carpeta compartida (volumen)
COPY ./src/assets/coordinates /app/shared-data/coordinates
RUN mkdir -p /app/shared-data/routes

# Expone el puerto donde corre el frontend (puedes cambiarlo si es necesario)
EXPOSE 8001

# Inicia la aplicación con el comando de desarrollo de Astro, asegurando que el servidor sea accesible desde fuera del contenedor
CMD ["npm", "run", "dev", "--", "--host"]


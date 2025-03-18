# Utiliza una imagen base de Java con Debian
FROM openjdk:19-jdk-slim

# Actualiza los repositorios y luego instala Python y pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Crear enlace simbólico a python3
RUN ln -s /usr/bin/python3 /usr/bin/python


# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo JAR desde el directorio local (debe estar en target/)
COPY target/TFG_backend-0.0.1-SNAPSHOT.jar /app/TFG_backend.jar

# Copia el script de Python desde tu máquina local al contenedor
COPY /src/scripts/ /app/scripts/

# Copia el archivo requirements.txt
COPY requirements.txt /app/

# Instala las dependencias de Python
RUN pip3 install -r /app/requirements.txt

# Expón el puerto en el contenedor
EXPOSE 8080

# Ejecuta el archivo JAR
CMD ["java", "-jar", "/app/TFG_backend.jar"]

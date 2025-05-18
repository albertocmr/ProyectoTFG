FROM openjdk:19-jdk-slim

RUN apt-get update && apt-get install -y python3 python3-pip

RUN ln -s /usr/bin/python3 /usr/bin/python

WORKDIR /app

COPY target/TFG_backend-0.0.1-SNAPSHOT.jar /app/TFG_backend.jar

COPY ./park_data /app/park_data
COPY requirements.txt /app/
COPY ./src/scripts /app/scripts/

RUN mkdir -p /app/shared-data/routes

RUN pip3 install -r /app/requirements.txt

EXPOSE 8080

CMD ["java", "-jar", "/app/TFG_backend.jar"]

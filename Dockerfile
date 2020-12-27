//To be complete
FROM openjdk:11.0.9-buster

VOLUME /temp

COPY build/libs/driver-ui* /opt/driver-ui*.jar/deployments/driver-service*.jar

CMD ["java" "-jar" "/opt/driver-service*.jar/deployments/driver-service*.jar"]

EXPOSE 8080

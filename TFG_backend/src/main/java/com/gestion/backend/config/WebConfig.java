package com.gestion.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        // Configuración CORS para permitir solicitudes desde el frontend (localhost:8001)
        registry.addMapping("/**")  // Permite todas las rutas
                .allowedOrigins("http://localhost:8001")  // Permite solicitudes desde el frontend en localhost:8001
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Métodos HTTP permitidos
                .allowedHeaders("*")  // Permite todos los encabezados
                .allowCredentials(true);  // Permite el uso de credenciales como cookies o autenticación
    }
}

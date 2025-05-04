package com.gestion.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.oauth2.server.resource.authentication.*;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Value("${auth0.domain}")
    private String auth0Domain;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
          .csrf(csrf -> csrf.disable())
          .authorizeHttpRequests(auth -> auth
              // GET públicos
              .requestMatchers(HttpMethod.GET,
                  "/api/natural_parks", 
                  "/api/natural_parks/*",
                  "/api/perimeters",
                  "/api/perimeters/**",
                  "/shared-data/",
                  "/shared-data/**")
                .permitAll()

              // Solo ADMIN puede crear, editar o borrar
              .requestMatchers(HttpMethod.POST,   
                  "/api/natural_parks",
                  "/api/natural_parks/**")
                .hasAuthority("ROLE_ADMIN")
              .requestMatchers(HttpMethod.PUT,    
                  "/api/natural_parks",
                  "/api/natural_parks/**")
                .hasAuthority("ROLE_ADMIN")
              .requestMatchers(HttpMethod.DELETE, 
                  "/api/natural_parks/**")
                .hasAuthority("ROLE_ADMIN")

              // Cualquier otra petición requiere autenticación
              .anyRequest()
                .authenticated()
          )
          .oauth2ResourceServer(oauth2 -> oauth2
              .jwt(jwt -> jwt
                  .decoder(jwtDecoder())
                  .jwtAuthenticationConverter(jwtAuthenticationConverter())
              )
          );

        return http.build();
    }

    /**
     * Descarga el JWKS de Auth0 para validar la firma del token.
     */
    @Bean
    public JwtDecoder jwtDecoder() {
        String jwksUri = "https://" + auth0Domain + "/.well-known/jwks.json";
        return NimbusJwtDecoder.withJwkSetUri(jwksUri).build();
    }

    /**
     * Convierte el claim custom de roles en GrantedAuthority("ROLE_<ROL>").
     */
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter rolesConverter = new JwtGrantedAuthoritiesConverter();
        rolesConverter.setAuthoritiesClaimName("https://parktracker.local/roles");
        rolesConverter.setAuthorityPrefix("ROLE_");

        JwtAuthenticationConverter jwtConverter = new JwtAuthenticationConverter();
        jwtConverter.setJwtGrantedAuthoritiesConverter(rolesConverter);
        return jwtConverter;
    }
}

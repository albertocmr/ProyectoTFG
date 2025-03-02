package com.gestion.backend.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api")
public class ScriptController {

@GetMapping("/ejecutar-script")
public List<String> ejecutarScript() {
    String pythonPath = "python";  // O "python3" dependiendo de tu configuración
    String scriptPath = "D:\\Escritorio\\TrabajoFinDeGrado\\Proyecto_TFG\\TFG_backend\\src\\scripts\\CheckRoute.py";


    try {
        // Ejecuta el script de Python
        ProcessBuilder processBuilder = new ProcessBuilder(pythonPath, scriptPath);
        processBuilder.redirectErrorStream(true);  // Combina la salida estándar y de error
        Process process = processBuilder.start();

        // Lee la salida del script
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder output = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            output.append(line);
        }

        // // Lee los errores del script en caso de que los tenga
        BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
        StringBuilder errorOutput = new StringBuilder();
        String errorLine;
        while ((errorLine = errorReader.readLine()) != null) {
            errorOutput.append(errorLine);
        }
        System.out.println("Errores del script Python: " + errorOutput.toString());

        // Obtiene la salida como un string
        String jsonOutput = output.toString().trim();
        System.out.println("Salida del script Python: " + jsonOutput);  // Imprime la salida del script para depuración

        // Verifica si la salida es vacía
        if (jsonOutput.isEmpty()) {
            System.out.println("La salida del script está vacía.");
            return List.of("No se encontraron parques.");
        }

        // Deserializa el JSON en un objeto Java
        ObjectMapper objectMapper = new ObjectMapper();
        ParksResponse parksResponse = objectMapper.readValue(jsonOutput, ParksResponse.class);

        // Limpia las comillas adicionales alrededor de los nombres de los parques
        List<String> cleanedParks = parksResponse.getParks().stream()
                                                  .map(park -> park.replace("\"", ""))  // Eliminar las comillas
                                                  .collect(Collectors.toList());

        return cleanedParks;
    } catch (Exception e) {
        // Manejo de excepciones
        System.out.println("Error al ejecutar el script: " + e.getMessage());
        e.printStackTrace();
        return List.of("Error al ejecutar el script");
    }
}

    // Clase interna para deserializar la respuesta JSON
    public static class ParksResponse {
        private List<String> parks;

        public List<String> getParks() {
            return parks;
        }

        public void setParks(List<String> parks) {
            this.parks = parks;
        }
    }
}

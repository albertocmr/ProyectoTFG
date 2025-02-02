package com.gestion.backend.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScriptController {

    // Endpoint para ejecutar el script Python
    @GetMapping("/ejecutar-script")
    public String ejecutarScript() {
        /* TORRE: "d:/Escritorio/TrabajoFinDeGrado/Proyecto_TFG/TFG_backend/src/scripts/CheckRoute.py"*/
        /* PORTATIL: "C:/Users/HP/Desktop/TrabajoFinDeGrado/Proyecto_TFG/TFG_backend/src/scripts/CheckRoute.py" */

        String scriptPath = "src/scripts/CheckRoute.py";
        
        try {
            // Configura el comando para ejecutar el script
            /* TORRE: "C:/Users/Alberto Cámara/AppData/Local/Microsoft/WindowsApps/python3.11.exe" */
            /* PORTATIL: "C:/Users/HP/AppData/Local/Microsoft/WindowsApps/python3.11.exe" */
            ProcessBuilder processBuilder = new ProcessBuilder("python3.11.exe", scriptPath);
            processBuilder.redirectErrorStream(true);

            // Ejecuta el script
            Process process = processBuilder.start();

            // Lee la salida del script
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }

            // Espera a que el script termine
            int exitCode = process.waitFor();
            if (exitCode == 0) {
                return output.toString(); // Devuelve la salida del script
            } else {
                return "Hubo un error al ejecutar el script Python. Código de salida: " + exitCode + "\nSalida del script: " + output.toString();
            }

        } catch (IOException | InterruptedException e) {
            return "Error al ejecutar el script: " + e.getMessage(); // Mensaje si ocurre una excepción
        }
    }
}

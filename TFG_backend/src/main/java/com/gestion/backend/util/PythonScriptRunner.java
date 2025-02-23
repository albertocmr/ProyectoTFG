package com.gestion.backend.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class PythonScriptRunner {

    public static List<String> runPythonScript(String pythonPath, String scriptPath) {
        List<String> outputLines = new ArrayList<>();
        try {
            // Configura el comando para ejecutar el script
            ProcessBuilder processBuilder = new ProcessBuilder(pythonPath, scriptPath);
            processBuilder.redirectErrorStream(true);

            // Ejecuta el script
            Process process = processBuilder.start();

            // Lee la salida del script
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                outputLines.add(line); // Añade cada línea de salida a la lista
            }

            // Espera a que el script termine
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                throw new RuntimeException("El script de Python terminó con código de error: " + exitCode);
            }

        } catch (Exception e) {
            throw new RuntimeException("Error al ejecutar el script de Python: " + e.getMessage(), e);
        }
        return outputLines;
    }
}
package com.gestion.backend.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin(origins = "http://localhost:8001") 
public class GpxUploadController {

    // Ruta donde se guardarán los archivos subidos
    private static final String UPLOAD_DIR = "uploads/";

    @PostMapping("/api/gpx/upload")  // Asegúrate de que esta ruta esté bien escrita
    public ResponseEntity<String> uploadGpxFile(@RequestParam("route") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("No se ha subido ningún archivo", HttpStatus.BAD_REQUEST);
        }

        try {
            // Verificar o crear el directorio de destino
            File directory = new File(UPLOAD_DIR);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Generar una ruta para el archivo subido
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());

            // Guardar el archivo en el servidor
            Files.write(path, file.getBytes());

            return ResponseEntity.ok("Archivo GPX subido correctamente: " + file.getOriginalFilename());

        } catch (IOException e) {
            return new ResponseEntity<>("Error al subir el archivo", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

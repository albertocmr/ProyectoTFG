package com.gestion.backend.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class GpxUploadController {

    // Ruta donde se guardarán los archivos subidos
    private static final String UPLOAD_DIR = "/app/uploads/";

    @PostMapping("/api/gpx/upload")
    public ResponseEntity<String> uploadGpxfile(@RequestParam("route") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("No se ha subido ningún archivo", HttpStatus.BAD_REQUEST);
        }

        try {
            File directory = new File(UPLOAD_DIR);
            if (!directory.exists()) {
                directory.mkdirs();
            }
            
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());

            Files.write(path, file.getBytes());

            return ResponseEntity.ok("Archivo GPX subido correctamente: " + file.getOriginalFilename());

        } catch (IOException e) {
            return new ResponseEntity<>("Error al subir el archivo", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

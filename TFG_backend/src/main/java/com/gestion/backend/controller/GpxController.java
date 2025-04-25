package com.gestion.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/gpx")
public class GpxController {

    private static final String ROUTES_DIR = "/app/shared-data/routes/";

    @GetMapping("/list")
    public ResponseEntity<List<String>> listGpxFiles() {
        File folder = new File(ROUTES_DIR);
        if(!folder.exists() || !folder.isDirectory()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }

        String[] files = folder.list((dir, name) -> name.toLowerCase().endsWith(".gpx"));

        if (files == null || files.length == 0) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
        return ResponseEntity.ok(Arrays.asList(files));
    }  
}

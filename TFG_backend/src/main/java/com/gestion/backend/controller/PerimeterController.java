package com.gestion.backend.controller;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gestion.backend.repository.NaturalParkRepository;

@RestController
@RequestMapping("/api/perimeters")
public class PerimeterController {

    private final NaturalParkRepository repository;

    public PerimeterController(NaturalParkRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Map<String, String>> getPerimeterFiles() {
        List<String> perimeters = repository.getAllPerimeterFiles();
        return perimeters.stream()
                         .map(p -> Map.of("perimeterfile", p))
                         .toList();
    }
}

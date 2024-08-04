package com.gestion.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.backend.exception.ResourceNotFoundException;
import com.gestion.backend.model.ParqueNatural;
import com.gestion.backend.repository.ParqueNaturalRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;




@CrossOrigin(origins = "http://localhost:8001/")
@RestController
@RequestMapping("/api/v1")
public class ParqueNaturalController {

    @Autowired
    private ParqueNaturalRepository parqueNaturalRepository;

    @GetMapping("/parques-naturales")
    public List<ParqueNatural> listarParqueNaturales() {
        return parqueNaturalRepository.findAll();
    }

    @PostMapping("/parques-naturales")
    public ResponseEntity<ParqueNatural> guardarParqueNatural(@RequestBody ParqueNatural parque){
    try {
        ParqueNatural parqueGuardado = parqueNaturalRepository.save(parque);
        return ResponseEntity.ok(parqueGuardado);
    } catch (Exception e) {
        // Log the error and return a meaningful error message
        e.printStackTrace(); // Print stack trace for debugging
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
}


    @GetMapping("/parques-naturales/{id}")
    public ResponseEntity<ParqueNatural> listarParqueNaturalPorId(@PathVariable Long id) {
        ParqueNatural parque = parqueNaturalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist park with that ID : " + id));

        return ResponseEntity.ok(parque);
    }

    @PutMapping("/parques-naturales/{id}")
    public ResponseEntity<ParqueNatural> actualizarParqueNatural(@PathVariable Long id, @RequestBody ParqueNatural parqueRequest) {
        ParqueNatural parque = parqueNaturalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist park with that ID : " + id));

        parque.setNombre(parqueRequest.getNombre());
        parque.setCiudad(parqueRequest.getCiudad());

        ParqueNatural parqueActualizado = parqueNaturalRepository.save(parque);

        return ResponseEntity.ok(parqueActualizado);
    }


    @DeleteMapping("/parques-naturales/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarParque(@PathVariable Long id) {
        ParqueNatural parque = parqueNaturalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist park with that ID : " + id));

        parqueNaturalRepository.delete(parque);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    
}

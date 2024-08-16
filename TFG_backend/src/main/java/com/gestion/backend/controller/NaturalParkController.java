package com.gestion.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.backend.exception.ResourceNotFoundException;
import com.gestion.backend.model.NaturalPark;
import com.gestion.backend.repository.NaturalParkRepository;




@CrossOrigin(origins = "http://localhost:8001/")
@RestController
@RequestMapping("/api/v1")
public class NaturalParkController {

    @Autowired
    private NaturalParkRepository naturalParkRepository;

    @GetMapping("/natural_parks")
    public List<NaturalPark> listNaturalParks() {
        return naturalParkRepository.findAll();
    }

    @PostMapping("/natural_parks")
    public ResponseEntity<NaturalPark> saveNaturalPark(@RequestBody NaturalPark naturalPark){
    try {
        NaturalPark parkSaved = naturalParkRepository.save(naturalPark);
        return ResponseEntity.ok(parkSaved);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
}


    @GetMapping("/natural_parks/{id}")
    public ResponseEntity<NaturalPark> listNaturalParkById(@PathVariable Long id) {
        NaturalPark naturalPark = naturalParkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist park with that ID : " + id));

        return ResponseEntity.ok(naturalPark);
    }

    @PutMapping("/natural_parks/{id}")
    public ResponseEntity<NaturalPark> updateNaturalPark(@PathVariable Long id, @RequestBody NaturalPark naturalParkRequest) {
        NaturalPark naturalPark = naturalParkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist park with that ID : " + id));

        naturalPark.setName(naturalParkRequest.getName());
        naturalPark.setProvince(naturalParkRequest.getProvince());
        naturalPark.setPerimeterfile(naturalParkRequest.getPerimeterfile());

        NaturalPark naturalParkUpdate = naturalParkRepository.save(naturalPark);

        return ResponseEntity.ok(naturalParkUpdate);
    }


    @DeleteMapping("/natural_parks/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePark(@PathVariable Long id) {
        NaturalPark park = naturalParkRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist park with that ID : " + id));

        naturalParkRepository.delete(park);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    
}

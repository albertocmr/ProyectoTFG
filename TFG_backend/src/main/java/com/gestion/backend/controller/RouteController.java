package com.gestion.backend.controller;

import java.util.List;

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
import com.gestion.backend.model.Route;
import com.gestion.backend.repository.RouteRepository;


@CrossOrigin(origins = "http://localhost:8001")
@RestController
@RequestMapping("/api")
public class RouteController {

    @Autowired
    private RouteRepository routeRepository;

    @GetMapping("/routes")
    public List<Route> listRoutes() {
        return routeRepository.findAll();
    }

    @PostMapping("/routes")
    public ResponseEntity<Route> saveRoute(@RequestBody Route route) {
        try {
            System.err.println(route);
            Route routeSaved = routeRepository.save(route);
            return ResponseEntity.ok(routeSaved);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/routes/{id}")
    public ResponseEntity<Route> listRouteById(@PathVariable Long id) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist route with that ID : " + id));

        return ResponseEntity.ok(route);
    }

    @PutMapping("/routes/{id}")
    public ResponseEntity<Route> updateRoute(@PathVariable Long id, @RequestBody Route routeRequest) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist route with that ID : " + id));

        route.setName(routeRequest.getName());
        route.setGpxfile("uploads/" + routeRequest.getGpxfile());

        Route routeUpdated = routeRepository.save(route);

        return ResponseEntity.ok(routeUpdated);
    }

    @DeleteMapping("/routes/{id}")
    public ResponseEntity<?> deleteRoute(@PathVariable Long id) {
        Route route = routeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Doesn't exist route with that ID : " + id));

        routeRepository.delete(route);

        return ResponseEntity.ok().build();
    }
    
}

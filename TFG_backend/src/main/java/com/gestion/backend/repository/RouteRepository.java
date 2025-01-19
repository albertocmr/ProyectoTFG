package com.gestion.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.backend.model.Route;


@Repository
public interface RouteRepository  extends JpaRepository<Route, Long>{
    
}

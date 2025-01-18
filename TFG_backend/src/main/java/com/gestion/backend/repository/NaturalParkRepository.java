package com.gestion.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.backend.model.NaturalPark;


@Repository
public interface NaturalParkRepository extends JpaRepository<NaturalPark, Long>{
    
}

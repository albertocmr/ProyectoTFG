package com.gestion.backend.repository;

import com.gestion.backend.model.NaturalPark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NaturalParkRepository extends JpaRepository<NaturalPark, Long>{

}

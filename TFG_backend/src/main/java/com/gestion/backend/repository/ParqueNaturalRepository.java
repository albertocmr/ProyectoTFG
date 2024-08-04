package com.gestion.backend.repository;

import com.gestion.backend.model.ParqueNatural;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ParqueNaturalRepository extends JpaRepository<ParqueNatural, Long>{

}

package com.example.chess_academy_db.repository;

import com.example.chess_academy_db.entity.Academy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyRepo extends JpaRepository<Academy, Integer> {
}

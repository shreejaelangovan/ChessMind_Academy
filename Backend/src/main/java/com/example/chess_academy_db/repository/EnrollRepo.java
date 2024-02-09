package com.example.chess_academy_db.repository;

import com.example.chess_academy_db.entity.Enroll;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollRepo extends JpaRepository<Enroll, Integer> {

}

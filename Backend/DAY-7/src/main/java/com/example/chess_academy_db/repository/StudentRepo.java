package com.example.chess_academy_db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.chess_academy_db.entity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student,Integer>{

}

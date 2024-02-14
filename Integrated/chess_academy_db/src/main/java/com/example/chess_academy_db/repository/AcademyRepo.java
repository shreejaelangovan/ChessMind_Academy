package com.example.chess_academy_db.repository;

import com.example.chess_academy_db.entity.Academy;

// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyRepo extends JpaRepository<Academy, Integer> {
    // @Query("SELECT DISTINCT a FROM Academy a LEFT JOIN FETCH a.courses")
    // List<Academy> findAllWithCourses();

}

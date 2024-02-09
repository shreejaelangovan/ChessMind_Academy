package com.example.chess_academy_db.repository;

import com.example.chess_academy_db.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

// import java.util.List;

public interface CourseRepo extends JpaRepository<Course, Integer> {
    // List<Course> findByAcademy_AcademyId(int academyId);
}
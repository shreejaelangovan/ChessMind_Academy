package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.entity.Course;
import com.example.chess_academy_db.repository.AcademyRepo;
import com.example.chess_academy_db.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepository;

    @Autowired
    private AcademyRepo academyRepository;

    public Course createCourse(int academyId, Course course) {
        Academy academy = academyRepository.findById(academyId).orElse(null);
        if (academy != null) {
            course.setAcademy(academy);
            return courseRepository.save(course);
        }
        return null;
    }

    public Course getCourseById(int courseId) {
        return courseRepository.findById(courseId).orElse(null);
    }

    public Course updateCourse(int courseId, Course updatedCourse) {
        if (!courseRepository.existsById(courseId)) {
            return null;
        }
        updatedCourse.setCourseId(courseId);
        return courseRepository.save(updatedCourse);
    }

    public void deleteCourse(int courseId) {
        courseRepository.deleteById(courseId);
    }
}
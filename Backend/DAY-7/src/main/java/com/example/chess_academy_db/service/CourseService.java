package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.Course;
import com.example.chess_academy_db.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private final CourseRepo courseRepository;

    public CourseService(CourseRepo courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(int courseId) {
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        return optionalCourse.orElse(null);
    }

    public void deleteCourseById(int courseId) {
        courseRepository.deleteById(courseId);
    }

    public Course updateCourse(Course updatedCourse) {
        return courseRepository.save(updatedCourse);
    }
}

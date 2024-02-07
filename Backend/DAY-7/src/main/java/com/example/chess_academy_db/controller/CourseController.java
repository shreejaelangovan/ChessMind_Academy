package com.example.chess_academy_db.controller;

import com.example.chess_academy_db.entity.Course;
import com.example.chess_academy_db.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/add")
    public Course addCourse(@RequestBody Course course) {
        return courseService.saveCourse(course);
    }

    @GetMapping("/getAll")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{courseId}")
    public Course getCourseById(@PathVariable int courseId) {
        return courseService.getCourseById(courseId);
    }

    @PutMapping("/{courseId}/update")
    public Course updateCourse(@PathVariable int courseId, @RequestBody Course updatedCourse) {
        Course existingCourse = courseService.getCourseById(courseId);

        if (existingCourse != null) {
            existingCourse.setCourseName(updatedCourse.getCourseName());
            existingCourse.setCourseInstructor(updatedCourse.getCourseInstructor());
            existingCourse.setCourseStudents(updatedCourse.getCourseStudents());
            existingCourse.setCourseDuration(updatedCourse.getCourseDuration());
            existingCourse.setCourseDescription(updatedCourse.getCourseDescription());

            return courseService.saveCourse(existingCourse);
        } else {
            // Handle case where the course with the given ID is not found
            return null;
        }
    }

    @DeleteMapping("/{courseId}")
    public void deleteCourseById(@PathVariable int courseId) {
        courseService.deleteCourseById(courseId);
    }
}

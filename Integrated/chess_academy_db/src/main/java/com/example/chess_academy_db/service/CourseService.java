package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.entity.Course;
import com.example.chess_academy_db.repository.AcademyRepo;
import com.example.chess_academy_db.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

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

    public List<Course> getCoursesByAcademyId(int academyId) {
        return courseRepository.findByAcademy_AcademyId(academyId);
    }

    public Course getCourseById(int courseId) {
        return courseRepository.findById(courseId).orElse(null);
    }

    public Course updateCourse(int courseId, Course updatedCourse) {
        // Retrieve the existing course from the database
        Course existingCourse = courseRepository.findById(courseId).orElse(null);
        if (existingCourse == null) {
            return null; // Return null if the course doesn't exist
        }
    
        // Retrieve the associated academy of the existing course
        Academy associatedAcademy = existingCourse.getAcademy();
    
        // Update the fields of the existing course with the values from the updatedCourse
        existingCourse.setCourseName(updatedCourse.getCourseName());
        existingCourse.setInstructor(updatedCourse.getInstructor());
        existingCourse.setStudents(updatedCourse.getStudents());
        existingCourse.setDuration(updatedCourse.getDuration());
        existingCourse.setAvailableDuration(updatedCourse.getAvailableDuration());
        existingCourse.setCourseDesc(updatedCourse.getCourseDesc());
    
        // Ensure that the associated academy is preserved
        existingCourse.setAcademy(associatedAcademy);
    
        // Save the updated course to the database
        return courseRepository.save(existingCourse);
    }

    public void deleteCourse(int courseId) {
        courseRepository.deleteById(courseId);
    }
}
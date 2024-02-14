package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.entity.Course;
import com.example.chess_academy_db.entity.Enroll;
import com.example.chess_academy_db.entity.Form;
import com.example.chess_academy_db.entity.User;
import com.example.chess_academy_db.repository.AcademyRepo;
import com.example.chess_academy_db.repository.CourseRepo;
import com.example.chess_academy_db.repository.EnrollRepo;
import com.example.chess_academy_db.repository.UserRepository;


import java.util.List;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepo enrollRepository;

    @Autowired
    private AcademyRepo academyRepository;

    @Autowired
    private CourseRepo courseRepository;

    @Autowired
    private UserRepository userRepository; // Autowire UserRepository

    public boolean enrollStudent(Form student, int acadId, int courseId, long userId) {
        try {
            User user = userRepository.findById(userId).orElse(null); // Fetch user by ID
            Academy academy = academyRepository.findById(acadId).orElse(null);
            Course course = courseRepository.findById(courseId).orElse(null);

            if (user != null && academy != null && course != null) { // Check if user, academy, and course exist
                Enroll enrollment = new Enroll();
                enrollment.setUser(user); // Set user
                enrollment.setAcademy(academy);
                enrollment.setCourse(course);
                enrollment.setJoinDate(LocalDate.now()); // Set join date to current date
                enrollRepository.save(enrollment);
                return true;
            } else {
                return false; 
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<Enroll> getAllEnrollments() {
        return enrollRepository.findAll();
    }

    public void deleteEnrolledCourseById(int enrollId) {
        enrollRepository.deleteById(enrollId);
    }
}
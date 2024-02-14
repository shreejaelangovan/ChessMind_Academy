package com.example.chess_academy_db.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
// import com.example.chess_project_backend.model.Enrollment;
// import com.example.chess_project_backend.repository.EnrollmentRepo;

import com.example.chess_academy_db.entity.Form;
import com.example.chess_academy_db.repository.FormRepo;

@RestController
public class FormController {

    @Autowired
    private FormRepo enrollmentRepo;

    @SuppressWarnings("null")
    @PostMapping("/api/enrollments")
    public ResponseEntity<String> enroll(@RequestBody Form Form) {
        enrollmentRepo.save(Form);
        return ResponseEntity.status(HttpStatus.CREATED).body("Enrollment successful");
    }
}
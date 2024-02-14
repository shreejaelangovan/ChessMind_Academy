package com.example.chess_academy_db.controller;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.service.AcademyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/academies")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @PostMapping
    public ResponseEntity<Academy> createAcademy(@RequestBody Academy academy) {
        Academy createdAcademy = academyService.createAcademy(academy);
        return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Academy>> getAllAcademies() {
        List<Academy> academies = academyService.getAllAcademies();
        return ResponseEntity.ok(academies);
    }

    @GetMapping("/{academyId}")
    public ResponseEntity<Academy> getAcademyById(@PathVariable int academyId) {
        Academy academy = academyService.getAcademyById(academyId);
        return ResponseEntity.ok(academy);
    }

    // @GetMapping("/academies-with-courses")
    // public ResponseEntity<List<Academy>> getAllAcademiesWithCourses() {
    //     List<Academy> academies = academyService.getAllAcademiesWithCourses();
    //     return ResponseEntity.ok(academies);
    // }


    @PutMapping("/{academyId}")
    public ResponseEntity<Academy> updateAcademy(@PathVariable int academyId, @RequestBody Academy academy) {
        Academy updatedAcademy = academyService.updateAcademy(academyId, academy);
        return ResponseEntity.ok(updatedAcademy);
    }

    @DeleteMapping("/{academyId}")
    public ResponseEntity<Void> deleteAcademy(@PathVariable int academyId) {
        academyService.deleteAcademy(academyId);
        return ResponseEntity.noContent().build();
    }
}
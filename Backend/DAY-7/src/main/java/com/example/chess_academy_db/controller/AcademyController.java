package com.example.chess_academy_db.controller;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.service.AcademyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/academies")
public class AcademyController {

    @Autowired
    private final AcademyService academyService;

    public AcademyController(AcademyService academyService) {
        this.academyService = academyService;
    }

    @PostMapping("/add")
    public Academy addAcademy(@RequestBody Academy academy) {
        return academyService.saveAcademy(academy);
    }

    @GetMapping("/getAll")
    public List<Academy> getAllAcademies() {
        return academyService.getAllAcademies();
    }

    @GetMapping("/{academyId}")
    public Academy getAcademyById(@PathVariable int academyId) {
        return academyService.getAcademyById(academyId);
    }

    @PutMapping("/{academyId}/update")
    public Academy updateAcademy(@PathVariable int academyId, @RequestBody Academy updatedAcademy) {
        Academy existingAcademy = academyService.getAcademyById(academyId);

        if (existingAcademy != null) {
            existingAcademy.setAcademyName(updatedAcademy.getAcademyName());
            existingAcademy.setAcademyDescription(updatedAcademy.getAcademyDescription());
            existingAcademy.setAcademyLocation(updatedAcademy.getAcademyLocation());
            existingAcademy.setAcademyDuration(updatedAcademy.getAcademyDuration());
            existingAcademy.setAcademyContact(updatedAcademy.getAcademyContact());

            return academyService.saveAcademy(existingAcademy);
        } else {
            // Handle case where the academy with the given ID is not found
            return null;
        }
    }

    @DeleteMapping("/{academyId}")
    public void deleteAcademyById(@PathVariable int academyId) {
        academyService.deleteAcademyById(academyId);
    }
}

package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.repository.AcademyRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

@Service
public class AcademyService {

    @Autowired
    private AcademyRepo academyRepository;

    @SuppressWarnings("null")
    public Academy createAcademy(Academy academy) {
        return academyRepository.save(academy);
    }

    public List<Academy> getAllAcademies() {
        return academyRepository.findAll();
    }

    public Academy getAcademyById(int academyId) {
        return academyRepository.findById(academyId).orElse(null);
    }
    
    // public List<Academy> getAllAcademiesWithCourses() {
    //     return academyRepository.findAllWithCourses();
    // }
    
    public Academy updateAcademy(int academyId, Academy updatedAcademy) {
        if (!academyRepository.existsById(academyId)) {
            return null;
        }
        updatedAcademy.setAcademyId(academyId);
        return academyRepository.save(updatedAcademy);
    }

    public void deleteAcademy(int academyId) {
        academyRepository.deleteById(academyId);
    }
}
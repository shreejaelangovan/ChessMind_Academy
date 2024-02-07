package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.Academy;
import com.example.chess_academy_db.repository.AcademyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AcademyService {

    @Autowired
    private final AcademyRepo academyRepository;

    public AcademyService(AcademyRepo academyRepository) {
        this.academyRepository = academyRepository;
    }

    public Academy saveAcademy(Academy academy) {
        return academyRepository.save(academy);
    }

    public List<Academy> getAllAcademies() {
        return academyRepository.findAll();
    }

    public Academy getAcademyById(int academyId) {
        Optional<Academy> optionalAcademy = academyRepository.findById(academyId);
        return optionalAcademy.orElse(null);
    }

    public void deleteAcademyById(int academyId) {
        academyRepository.deleteById(academyId);
    }

    public Academy updateAcademy(Academy updatedAcademy) {
        return academyRepository.save(updatedAcademy);
    }
}

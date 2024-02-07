package com.example.chess_academy_db.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    // private int academyId;
    private String courseName;
    private String courseInstructor;
    private int courseStudents;
    private String courseDuration;
    private String courseDescription;

    @ManyToOne
    @JoinColumn(name = "academy_id")
    private Academy academy;

    // Constructors, getters, and setters can be added as needed
}

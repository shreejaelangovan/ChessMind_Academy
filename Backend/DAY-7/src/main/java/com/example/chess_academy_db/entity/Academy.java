package com.example.chess_academy_db.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
public class Academy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String academyName;
    private String academyDescription;
    private String academyLocation;
    private String academyDuration;
    private Long academyContact;

    // Constructors, getters, and setters can be added as needed
}

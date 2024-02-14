package com.example.chess_academy_db.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
// import javax.persistence.*;
// import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Enroll {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int enrollId;

    @ManyToOne
    @JoinColumn(name = "user_id") 
    @JsonBackReference
    private User user; 

    @ManyToOne
    @JoinColumn(name = "academy_id")
    @JsonBackReference
    private Academy academy;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonBackReference
    private Course course;

    private LocalDate joinDate;
}

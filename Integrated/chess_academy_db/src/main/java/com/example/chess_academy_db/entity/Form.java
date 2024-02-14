package com.example.chess_academy_db.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int formId;
    private String name;
    private String fatherName;
    private String motherName;
    private String gender;
    private int age;
    private long contact;
    private long alcontact;
    private String email;
    private String houseNo;
    private String streetName;
    private String areaName;
    private int pincode;
    private String state;
    private String nationality;
   
}

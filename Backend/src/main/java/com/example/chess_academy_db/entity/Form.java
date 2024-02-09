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
    private String firstName;
    private String lastName;
    private String FatherName;
    private String MotherName;
    private String studEmail;
    private int studAge;
    private Long phoneNumber;
    private Long alternatePhoneNumber;
    private String gender;
    private int houseNo;
    private String streetName;
    private String areaName;
    private Long pincode;
    private String state;
    private String nationality;
   
}

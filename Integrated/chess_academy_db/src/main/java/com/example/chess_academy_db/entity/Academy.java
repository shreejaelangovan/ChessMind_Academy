package com.example.chess_academy_db.entity;
import jakarta.persistence.*;
import lombok.Data;
// import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

// import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Data
@NoArgsConstructor
public class Academy {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int academyId;
    private String academyName;
    // private String academyDesc;
    private String location;
    private String imageUrl;
    private String rating;
    private long contact;

    @OneToMany(mappedBy = "academy", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Course> courses;
}
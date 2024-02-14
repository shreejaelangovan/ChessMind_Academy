// package com.example.chess_academy_db.service;

// // import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.http.HttpStatus;
// // import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Service;
// // import org.springframework.web.bind.annotation.PathVariable;
// // import org.springframework.web.bind.annotation.PostMapping;
// // import org.springframework.web.bind.annotation.RequestBody;

// import com.example.chess_academy_db.entity.Academy;
// import com.example.chess_academy_db.entity.Course;
// import com.example.chess_academy_db.entity.Form;
// import com.example.chess_academy_db.repository.FormRepo;

// // import jakarta.persistence.EntityNotFoundException;

// // FormService.java
// @Service
// public class FormService {

//     @Autowired
//     private FormRepo formRepository;

//     public Form createForm(int academyId, int courseId, Form form) {
//         // Validate inputs or perform additional business logic if needed

//         // Set the academy and course for the form's user
//         form.getUser().setAcademy(new Academy(academyId));
//         form.getUser().setCourse(new Course(courseId));

//         // Save the form
//         return formRepository.save(form);
//     }
// }

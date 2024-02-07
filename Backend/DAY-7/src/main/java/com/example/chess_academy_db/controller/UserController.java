package com.example.chess_academy_db.controller;

import com.example.chess_academy_db.entity.UserEntity;
import com.example.chess_academy_db.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
// import java.util.Optional;
import java.util.Optional;

@RestController
@RequestMapping("/user-details")
public class UserController {

    @Autowired
    private UserService userDetailsService;

    @GetMapping
    public List<UserEntity> getAllUserDetails() {
        return userDetailsService.getAllUserDetails();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserEntity> getUserDetailsById(@PathVariable int userId) {
        Optional<UserEntity> userDetails = userDetailsService.getUserDetailsById(userId);
        return userDetails.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    // @GetMapping("/{userId}")
    // public UserEntity getUserDetailsById(@PathVariable int userId) {
    //     return userDetailsService.getUserDetailsById(userId);
    // }
    
    @PostMapping
    public UserEntity createUserDetails(@RequestBody UserEntity userDetails) {
        return userDetailsService.createUserDetails(userDetails);
    }
    // public ResponseEntity<String> createUserDetails(@RequestBody UserDetails userDetails) {
    //     UserDetails createdUserDetails = userDetailsService.createUserDetails(userDetails);
    //     return ResponseEntity.ok("User details created with ID: " + createdUserDetails.getUserId());
    // }

    @PutMapping("/{userId}")
    public ResponseEntity<String> updateUserDetails(@PathVariable int userId, @RequestBody UserEntity updatedUserDetails) {
        UserEntity updatedDetails = userDetailsService.updateUserDetails(userId, updatedUserDetails);
        return ResponseEntity.ok("User details updated for ID: " + updatedDetails.getUserId());
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUserDetails(@PathVariable int userId) {
        userDetailsService.deleteUserDetails(userId);
        return ResponseEntity.ok("User details deleted for ID: " + userId);
    }
}

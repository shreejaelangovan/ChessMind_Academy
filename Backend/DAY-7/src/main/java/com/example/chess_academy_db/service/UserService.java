package com.example.chess_academy_db.service;

import com.example.chess_academy_db.entity.UserEntity;
import com.example.chess_academy_db.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userDetailsRepository;

    public List<UserEntity> getAllUserDetails() {
        return userDetailsRepository.findAll();
    }

    public Optional<UserEntity> getUserDetailsById(int userId) {
        return userDetailsRepository.findById(userId);
    }

    public UserEntity createUserDetails(UserEntity userDetails) {
        if (userDetails != null) {
            // You may want to perform validation or other operations before saving
            return userDetailsRepository.save(userDetails);
        } else {
            throw new IllegalArgumentException("User details cannot be null");
        }
    }

    public UserEntity updateUserDetails(int userId, UserEntity updatedUserDetails) {
        Optional<UserEntity> optionalUserDetails = userDetailsRepository.findById(userId);
        if (optionalUserDetails.isPresent()) {
            UserEntity userDetails = optionalUserDetails.get();
            userDetails.setUserEmail(updatedUserDetails.getUserEmail());
            userDetails.setUserName(updatedUserDetails.getUserName());
            userDetails.setMobileNumber(updatedUserDetails.getMobileNumber());
            // Update other fields as needed...
            return userDetailsRepository.save(userDetails);
        } else {
            throw new RuntimeException("UserDetails not found with ID: " + userId);
        }
    }

    public void deleteUserDetails(int userId) {
        userDetailsRepository.deleteById(userId);
    }
}

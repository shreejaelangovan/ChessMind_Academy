package com.example.chess_academy_db.controller;

import java.util.HashMap;
import java.util.Map;

// package com.example.ssenior.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.chess_academy_db.dto.request.AuthenticationRequest;
import com.example.chess_academy_db.dto.request.RegisterRequest;
import com.example.chess_academy_db.dto.response.AuthenticationResponse;
import com.example.chess_academy_db.service.AuthenticationService;

// import com.example.ssenior.dto.request.AuthenticationRequest;
// import com.example.ssenior.dto.request.RegisterRequest;
// import com.example.ssenior.dto.response.AuthenticationResponse;
// import com.example.ssenior.services.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            authenticationService.register(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Registration successful");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/authenticate")
public ResponseEntity<Map<String, Object>> authenticate(@RequestBody AuthenticationRequest request) {
    AuthenticationResponse authenticationResponse = authenticationService.authenticate(request);

    Map<String, Object> response = new HashMap<>();
    response.put("message", "Login successful");
    response.put("authenticationResponse", authenticationResponse);

    return ResponseEntity.ok(response);
}
}
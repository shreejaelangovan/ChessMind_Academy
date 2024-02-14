package com.example.chess_academy_db.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class RegistrationException extends RuntimeException {
    public RegistrationException(String message) {
        super(message);
    }
}
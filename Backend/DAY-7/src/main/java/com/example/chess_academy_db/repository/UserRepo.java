package com.example.chess_academy_db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.chess_academy_db.entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity,Integer>{

}

package com.sergiorosa.movieapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sergiorosa.movieapp.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);

}

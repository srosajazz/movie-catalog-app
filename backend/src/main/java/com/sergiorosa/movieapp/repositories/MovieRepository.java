package com.sergiorosa.movieapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sergiorosa.movieapp.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}

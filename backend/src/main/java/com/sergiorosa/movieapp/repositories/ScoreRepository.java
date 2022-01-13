package com.sergiorosa.movieapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sergiorosa.movieapp.entities.Score;
import com.sergiorosa.movieapp.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}

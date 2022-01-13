package com.sergiorosa.movieapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sergiorosa.movieapp.dto.MovieDTO;
import com.sergiorosa.movieapp.dto.ScoreDTO;
import com.sergiorosa.movieapp.entities.Movie;
import com.sergiorosa.movieapp.entities.Score;
import com.sergiorosa.movieapp.entities.User;
import com.sergiorosa.movieapp.repositories.MovieRepository;
import com.sergiorosa.movieapp.repositories.ScoreRepository;
import com.sergiorosa.movieapp.repositories.UserRepository;

@Service
public class ScoreService {
	
//	composition
	@Autowired
	private MovieRepository movieRepository;
	
//	composition
	@Autowired
	private UserRepository userRepository;
	
//	composition
	@Autowired
	private ScoreRepository  scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : movie.getScores()){
			sum = sum + s.getValue();
		}
		
		 double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
			return new MovieDTO(movie);
	}
}




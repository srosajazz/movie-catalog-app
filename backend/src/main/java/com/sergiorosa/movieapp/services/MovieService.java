package com.sergiorosa.movieapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sergiorosa.movieapp.dto.MovieDTO;
import com.sergiorosa.movieapp.entities.Movie;
import com.sergiorosa.movieapp.repositories.MovieRepository;

@Service
public class MovieService {
	
//	composition
	@Autowired
	private MovieRepository repository;
	
//	find all page
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}
	
//	Get page - by ID
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}


}

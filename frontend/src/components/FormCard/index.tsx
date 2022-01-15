import './styles.css'
import { Link } from 'react-router-dom'
import { Movie } from 'types/movie'
import { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/requests';
import axios from 'axios';

type Props = {
  movieId: string;
}

function FormCard({ movieId }: Props) {

  //useState
  const [movie, setMovie] = useState<Movie>();

  //UseEffects
  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`)
      .then(response => {
        setMovie(response.data);
      });
  },[movieId]);

  //Static 
  // const movie = {
  //   id: 1,
  //   image:
  //     'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
  //   title: 'The Witcher',
  //   count: 2,
  //   score: 4.5,
  // }
  return (
    <div className='dsmovie-form-container'>
      <img
        className='dsmovie-movie-card-image'
        src={movie?.image}
        alt={movie?.title}
      />
      <div className='dsmovie-card-bottom-container'>
        <h3>{movie?.title}</h3>
        <form className='dsmovie-form'>
          <div className='form-group dsmovie-form-group'>
            <label htmlFor='email'>Please add your email</label>
            <input type='email' className='form-control' id='email' />
          </div>
          <div className='form-group dsmovie-form-group'>
            <label htmlFor='score'>Rate</label>
            <select className='form-control' id='score'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='dsmovie-form-btn-container'>
            <button type='submit' className='btn btn-primary dsmovie-btn'>
              Salvar
            </button>
          </div>
        </form>

        <Link to='/'>
          <button className='btn btn-primary dsmovie-btn mt-3'>Cancelar</button>
        </Link>
      </div>
    </div>
  )
}

export default FormCard;

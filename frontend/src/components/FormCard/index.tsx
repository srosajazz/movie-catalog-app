import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { Movie } from 'types/movie'
import { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/requests';
import axios, { AxiosRequestConfig } from 'axios';
import { validateEmail } from 'utils/validate';

type Props = {
  movieId: string;
}

function FormCard({ movieId }: Props) {
  //useNavigate
  const navigate = useNavigate();

  //useState
  const [movie, setMovie] = useState<Movie>()

  //UseEffects
  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data)
    })
  }, [movieId])

  //Static
  // const movie = {
  //   id: 1,
  //   image:
  //     'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
  //   title: 'The Witcher',
  //   count: 2,
  //   score: 4.5,
  // }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    //prevent form to submit
    const email = (event.target as any).email.value
    const score = (event.target as any).score.value

    // console.log(email,score);

    if (!validateEmail(email)) {
      return
    }
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score,
      },
    }

    //promise.then(() =>)
    axios(config).then((response) => {
      // console.log(response.data)
      navigate("/");
    })
  }

  return (
    <div className='dsmovie-form-container'>
      <img
        className='dsmovie-movie-card-image'
        src={movie?.image}
        alt={movie?.title}
      />
      <div className='dsmovie-card-bottom-container'>
        <h3>{movie?.title}</h3>
        <form className='dsmovie-form' onSubmit={handleSubmit}>
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

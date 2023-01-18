import { useParams } from 'react-router-dom';
import {BsGraphUp, 
  BsWallet2, 
  BsHourglassSplit, 
  BsFillFileEarmarkTextFill,
  BsCalendar2Day
} from "react-icons/bs";
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovieDetails = async(url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data)
      setMovie(response.data);

    } catch(err) {
      setError(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovieDetails(movieUrl)
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("pt-PT", {
      style: "currency",
      currency: "EUR"
    })
  }
  

  return (
    <section className='min-h-screen py-12 font-nunito'>
      <div className='max-w-5xl mx-auto p-4'>
        <h2 className='font-bold text-4xl text-center pb-10'>Movie Details</h2>
        <article className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {loading && <Loader />}
          {movie &&
           <>
            <div className=''>
            <MovieCard movie={movie} showLink={false} />
            </div>
            <div className='flex flex-col gap-6'>
              <p className='font-semibold text-xl text-center'>{movie.tagline}</p>
              <div className='flex items-center flex-row gap-5 md:flex-col md:items-start'>
                <h3>
                  <span className='font-semibold text-lg'>Genre:</span>
                </h3>
                <p className='flex items-center gap-5 flex-wrap'>
                  {movie.genres.map(mov =>
                    (<div className='bg-red-500 p-2 rounded-full shadow-md'><span key={mov.id}>{mov.name}</span></div>
                    ) )}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsWallet2 className='text-red-500' />
                  <span>Budget: </span>
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsGraphUp className='text-red-500' />
                  <span>Revenue:</span>
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsHourglassSplit className='text-red-500' />
                  <span>Runtime: </span>
                </h3>
                <p>{movie.runtime} minutes</p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsCalendar2Day className='text-red-500'/>
                  <span>Release Date: </span>
                </h3>
                <p>{movie.release_date}</p>
              </div>
              <div className='flex flex-col gap-5'>
                <h3 className='flex items-center font-medium gap-1'>
                  <span>Overview:</span>
                </h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </>
          }
        </article>
      </div>
    </section>
  )
}

export default Movies;
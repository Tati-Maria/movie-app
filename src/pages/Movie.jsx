import { useParams } from 'react-router-dom';
import {BsGraphUp, 
  BsWallet2, 
  BsHourglassSplit, 
  BsCalendar2Day
} from "react-icons/bs";
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const {id} = useParams();
  const {details, error, loading} = useFetchData(`${moviesURL}${id}?${apiKey}`);

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
          {loading && (<p className='text-center'>Loading...</p>)}
          {details &&
           <>
            <div className=''>
            <MovieCard movie={details} showLink={false} />
            </div>
            <div className='flex flex-col gap-6'>
              <p className='font-semibold text-xl text-center'>{details.tagline}</p>
              <div className='flex items-center flex-row gap-5 md:flex-col md:items-start'>
                <h3 className='font-semibold text-lg'>
                  Genre:
                </h3>
                <p className='flex items-center gap-5 flex-wrap'>
                  {details.genres.map(mov =>
                    (<div className='bg-red-500 p-2 rounded-full shadow-md'><span key={mov.id}>{mov.name}</span></div>
                    ) )}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsWallet2 className='text-red-500' />
                  <span>Budget: </span>
                </h3>
                <p>{formatCurrency(details.budget)}</p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsGraphUp className='text-red-500' />
                  <span>Revenue:</span>
                </h3>
                <p>{formatCurrency(details.revenue)}</p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsHourglassSplit className='text-red-500' />
                  <span>Runtime: </span>
                </h3>
                <p>{details.runtime} minutes</p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className='flex items-center font-medium gap-1'>
                  <BsCalendar2Day className='text-red-500'/>
                  <span>Release Date: </span>
                </h3>
                <p>{details.release_date}</p>
              </div>
              <div className='flex flex-col gap-5'>
                <h3 className='flex items-center font-medium gap-1'>
                  <span>Overview:</span>
                </h3>
                <p>{details.overview}</p>
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
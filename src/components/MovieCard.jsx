import {FaStar} from "react-icons/fa";
import { Link } from 'react-router-dom';


const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {


  return (
    <section className='flex flex-col space-y-4 bg-gray-900 p-4 rounded-md'>
        <img src={imageURL + movie.poster_path} alt={movie.title} className="rounded-md shadow-md" />
        <div >
        <h2 className='font-semibold'>{movie.title}</h2>
        <p className='flex items-center gap-3 pb-2'>
            <FaStar color='yellow' />
            <span>{movie.vote_average}</span>
        </p>
        {showLink && <Link className='underline font-bold hover:text-red-500 duration-300' to={`/movie/${movie.id}`}>See Details</Link>}
        </div>
    </section>
  )
}

export default MovieCard;
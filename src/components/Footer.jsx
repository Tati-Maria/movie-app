import React from 'react'
import tmdb from "../assets/tmdb.svg"



const Footer = () => {
  return (
    <footer className='py-2 bg-gray-900'>
        <div className='max-w-5xl mx-auto p-4'>
            <section className='flex items-center justify-between flex-col gap-4 sm:flex-row'>
                <div>
                    <a href="https://www.themoviedb.org/">
                    <img src={tmdb} alt="tmdb logo" className='w-16 mx-auto' />
                    </a>
                </div>
                <div>
                    <p>Made by <a href="https://github.com/Tati-Maria/movie-app" target="_blank" className='underline text-red-500'>Maria</a></p>
                </div>
                <div>
                <a 
                className='underline pr-1' 
                target="_blank" 
                href="https://icons8.com/icon/24391/film-reel">
                    Film Reel 
                </a> 
                icon by  
                <a 
                target="_blank" 
                href="https://icons8.com"
                className='underline pl-1'
                >
                    Icons8
                </a>
                </div>
            </section>
        </div>
    </footer>
  )
}

export default Footer
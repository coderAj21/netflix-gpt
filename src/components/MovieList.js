import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    if (!movies)return;
  return (
    <div className='px-[4%]'>
        <div>
            <h1 className='text-3xl py-4 text-slate-200 hover:text-white font-semibold'>{title}</h1>
            <div className='flex overflow-x-hidden gap-x-6'>
                {
                    movies.map((movie)=>{
                        return <MovieCard key={movie.id} poster_path={movie.poster_path}></MovieCard>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList;
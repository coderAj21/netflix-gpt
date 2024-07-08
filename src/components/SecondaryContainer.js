import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies =useSelector((store)=>(store?.movies));
  return (
    <div className='bg-black'>
      <div className='-mt-[15%] relative z-20 max-sm:-mt-[1%] lg:-mt-[10%] md:-mt-[8%]'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      </div>
      <div>
        <MovieList title={"Trending"} movies={movies?.trendingMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
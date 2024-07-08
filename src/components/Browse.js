import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch=useSelector((store)=>(store.gpt?.showGptSearch));
  // it will fetch the movie list api and store the data into movieSlices;
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div className='relative w-screen h-screen overflow-x-hidden'>
      <Header/>
      {
        showGptSearch?
        (<GptSearch/>)
        :
        (
          <div>
            <MainContainer/>
            <SecondaryContainer/>
          </div>
        )
      }
    </div>
  )
}

export default Browse
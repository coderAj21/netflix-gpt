import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { netflixBackground } from '../utils/constant';

const GptSearch = () => {
  return (
    <div className='w-screen'>
      {/* <div className='absolute max-w-[95%]'>
            <img src={netflixBackground}
            alt="logo"
            className="brightness-50 scale-110 object-fit overflow-hidden"
            ></img>
        </div> */}
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
};

export default GptSearch;
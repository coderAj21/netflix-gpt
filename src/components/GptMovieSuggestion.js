import React from 'react';
import {useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt=useSelector((store)=>(store.gpt));
  const{movieNames,movieResults}=gpt
  if (!movieNames)return;
  if (!movieResults) return;
  return (
    <div className='bg-black w-full pt-10 mt-[1.5%] bg-opacity-90'>
      <div>
        {
          movieNames.map((movieName,index)=>(
            <MovieList key={movieName} title={movieName} movies={movieResults[index]}></MovieList>
          ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestion;
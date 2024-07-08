import React from 'react';
import { movieImg } from '../utils/constant';

const MovieCard = ({poster_path}) => {
  if (!poster_path)return;
  return (
        <img className='rounded-md object-contain cursor-pointer hover:scale-95 transition-all duration-150 ease-in
        max-sm:w-[100px]' 
        src={movieImg+poster_path} alt=''></img>
  )
}

export default MovieCard
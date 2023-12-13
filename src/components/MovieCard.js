import React from 'react';
import { movieImg } from '../utils/constant';

const MovieCard = ({poster_path}) => {
  if (!poster_path)return;
  return (
    <div className="min-w-[200px] max-w-[200px]">
        <img className='w-full aspect-rectangle' src={movieImg+poster_path} alt=''></img>
    </div>
  )
}

export default MovieCard
import React from 'react';
import { movieImg } from '../utils/constant';

const MovieCard = ({poster_path}) => {
  return (
    <div className="min-w-[200px] pr-5">
        <img className='w-full asoect-square' src={movieImg+poster_path} alt=''></img>
    </div>
  )
}

export default MovieCard
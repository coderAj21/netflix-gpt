import React, { useState } from 'react'
import MovieCard from './MovieCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../utils/constant';

const MovieList = ({title,movies}) => {
    if (!movies)return;
    settings.slidesToShow=movies.length>=5?5:movies.length;
  return (
    <div  className='w-screen px-[4%] relative'>
            <h1 className='text-3xl py-6 text-slate-300 hover:text-white transition-all duration-200 ease-in font-semibold'>{title}</h1>
            <div className='w-full'>
            <Slider {...settings}>
                {
                    movies.map((movie)=>{
                        return(<MovieCard key={movie.id} poster_path={movie.poster_path}></MovieCard>)
                    })
                }
            </Slider>
            </div>
    </div>
  )
}

export default MovieList;
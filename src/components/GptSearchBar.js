import React, { useRef } from 'react';
import { getMoviesfromOpenAi} from '../utils/openai';
import { optionApi } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../redux/slices/gptSlice';
import { getMoviesfromGemini } from '../utils/gemini';

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const searchText=useRef();
  async function handleGptSearchClick(){
    console.log(searchText.current.value)
    // make an api call to gpt api and get movie results
    try{
      // let gptMovies=await getMoviesfromOpenAi(searchText.current.value);
      let gptMovies=await getMoviesfromGemini(searchText.current.value);
      const promiseArray=gptMovies.map((movie)=>(serachMovieTMDB(movie.trim())));
      const tmdbResults=await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

    }catch(error){
      console.log(error);
    }
  }
  const serachMovieTMDB=async (movieName)=>{
    const data=await fetch (
      "https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1",optionApi
      );
    const response=await data.json();
    return response.results;
  }
  return (
    <div className='relative mx-auto pt-6 w-1/2 z-30'>
        <form className='flex gap-x-2' onSubmit={(e)=>(e.preventDefault())}>
            <input
            ref={searchText}
            type='text'
            className='py-1 px-4 text-xl font-semibold text-black w-full rounded-full border-[3px] outline-none border-[#9d0208]
           focus:border-blue-500 focus:text-white focus:bg-black '
            placeholder='What would you like to Watch Today?'
            ></input>
            <button className='py-1 px-4 bg-[#e50914] font-bold text-white rounded  hover:bg-[#e50914df]'
            type='submit' onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar;
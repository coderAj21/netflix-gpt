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
    let query=searchText.current.value?searchText.current.value:"Best 2023 Movies"
    // make an api call to gpt api and get movie results
    try{
      // let gptMovies=await getMoviesfromOpenAi(searchText.current.value);
      let gptMovies=await getMoviesfromGemini(query);
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
    <div className='relative mx-auto py-6 w-1/2 z-30 max-md:w-3/5 max-sm:w-3/5'>
        <form className='flex flex-row justify-between gap-x-4' onSubmit={(e)=>(e.preventDefault())}>
            <input
            ref={searchText}
            type='text'
            className='py-1 px-3 text-xl font-semibold text-black w-full rounded-full border-[3px] outline-none border-[#9d0208]
           focus:border-blue-500 focus:text-white focus:bg-black max-sm:py-0 max-sm:ml-5 max-sm:text-sm'
            placeholder='What would you like to Watch Today?'
            ></input>
            
            <button className='h-9 max-sm:h-6 px-3 py-1 max-sm:text-sm   bg-[#e50914] font-bold text-white rounded  hover:bg-[#e50914df]'
            type='submit' onClick={handleGptSearchClick}
            >Search
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;
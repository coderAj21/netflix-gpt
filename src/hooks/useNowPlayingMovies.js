import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionApi } from "../utils/constant";
import { addNowPlayingMovies } from "../redux/slices/movieSlice";

const useNowPlayingMovies=()=>{
  const dispatch=useDispatch();
  const nowPlayingMovies=useSelector((store)=>(store?.movies?.nowPlayingMovies));

  async function fetchApi(){
    try{
      const api=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",optionApi);
      const response=await api.json();
      console.log(response.results);
      dispatch(addNowPlayingMovies(response.results));
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    !nowPlayingMovies && fetchApi();
  },[]);
  
};
export default useNowPlayingMovies;
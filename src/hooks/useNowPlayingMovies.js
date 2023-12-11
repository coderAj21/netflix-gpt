import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { optionApi } from "../utils/constant";
import { addNowPlayingMovies } from "../redux/slices/movieSlice";

const useNowPlayingMovies=()=>{
  const dispatch=useDispatch();

  async function fetchApi(){
    try{
      const api=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",optionApi);
      const response=await api.json();
      dispatch(addNowPlayingMovies(response.results));
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchApi();
  },[]);
  
};
export default useNowPlayingMovies;
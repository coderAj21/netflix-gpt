import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionApi } from "../utils/constant";
import { addPopularMovies } from "../redux/slices/movieSlice";

const usePopularMovies=()=>{
  const dispatch=useDispatch();
  const popularMovies=useSelector((store)=>(store?.movies?.popularMovies));

  async function fetchApi(){
    try{
      const api=await fetch("https://api.themoviedb.org/3/movie/popular?page=2",optionApi);
      const response=await api.json();
      dispatch(addPopularMovies(response.results));
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    !popularMovies && fetchApi();
  },[]);
  
};
export default usePopularMovies;
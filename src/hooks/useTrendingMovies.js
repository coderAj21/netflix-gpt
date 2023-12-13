import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../redux/slices/movieSlice";
import { useEffect } from "react";
import { optionApi } from "../utils/constant";

const useTrendingMovies=()=>{
    const dispatch=useDispatch();
    const trendingMovies=useSelector((store)=>(store?.movies?.trendingMovies));
    async function fetchApi(){
        try{
            const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",optionApi);
            const response=await data.json();
            dispatch(addTrendingMovies(response?.results));
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        !trendingMovies && fetchApi();
    },[]);
}
export default useTrendingMovies;
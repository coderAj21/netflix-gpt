import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { optionApi } from "../utils/constant";
import { addUpcominMovies } from "../redux/slices/movieSlice";



const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    async function fetchApi(){
        try{
            const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",optionApi);
            const response=await data.json();
            dispatch(addUpcominMovies(response?.results));
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchApi();
    },[])
};

export default useUpcomingMovies;
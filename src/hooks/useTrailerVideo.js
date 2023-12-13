import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { optionApi } from "../utils/constant";
import { addTrailerVideo } from "../redux/slices/movieSlice";


export const useTrailerVideo=(movieId)=>{
    const dispatch=useDispatch();   
    const trailerVideo=useSelector((store)=>(store.movies.trailerVideo));
    async function fetchApi(){
        try{
            const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",optionApi);
            const response=await data.json();
            console.log("videos Render: ")
            // console.log(response);
            const filterData=response.results.filter((video)=>(video.type==="Trailer"));
            const trailer=filterData.length?filterData[0]:response.results[0];
            dispatch(addTrailerVideo(trailer));
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        !trailerVideo && fetchApi();
    },[])
};
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { optionApi } from "../utils/constant";
import { addTrailerVideo } from "../redux/slices/movieSlice";


export const useTrailerVideo=(movieId)=>{
    const dispatch=useDispatch();   
    async function fetchApi(){
        try{
            const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",optionApi);
            const response=await data.json();
            const filterData=response.results.filter((video)=>(video.type==="Trailer"));
            const trailer=filterData.length?filterData[0]:response.results[0];
            console.log(trailer);
            dispatch(addTrailerVideo(trailer));
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApi();
    },[])
}
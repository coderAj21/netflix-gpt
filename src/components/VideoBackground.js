import React, { useState } from "react";
import {useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";
import { VscUnmute } from "react-icons/vsc";
import { GrVolumeMute } from "react-icons/gr";

const VideoBackground=({movieId})=>{
    const trailerVideo=useSelector((store)=>(store.movies?.trailerVideo));
    const [isMute,setIsMute]=useState(true)
    useTrailerVideo(movieId);
    return(
        <div>
            <iframe
            className="w-full aspect-video"
             src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=${isMute?1:0}&loop=1&controls=0`} 
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <div className="absolute right-[4%] lg:bottom-[25%] text-3xl  border border-white w-fit rounded-full
             p-[1px] z-50 max-sm:bottom-5 max-sm:text-base md:bottom-20 md:text-xl xl:bottom-[35%]"
            onClick={()=>(setIsMute(!isMute))}>
                <div className="border border-white rounded-full text-white cursor-pointer p-2 hover:opacity-70 font-bold">
                    {
                        isMute ?
                        (<span><GrVolumeMute /></span>)
                        :
                        (<span><VscUnmute/></span>)
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoBackground;
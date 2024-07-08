import React from 'react';
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video absolute pt-[20%] px-[4%] max-sm:px-[2%] max-sm:pt-[20%] md:pt-[22%] md:px-[4.4%]
     bg-gradient-to-r from-black text-white xl:pt-[25%]'>
        <h1 className='text-6xl font-bold max-sm:text-lg md:text-3xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4 whitespace-break-spaces text-justify max-sm:text-slate-300
          max-sm:text-xs max-sm:py-1 max-sm:w-1/2 md:w-1/2 md:text-slate-300 md:py-4'>
          {overview.split(" ").slice(0,28).join(" ")}
        </p>
        <div className='flex flex-row gap-4 max-sm:py-2'>
            <button className='flex items-center font-semibold bg-white text-black text-2xl p-2 px-8
             rounded border gap-2 hover:bg-opacity-80 max-sm:px-2 max-sm:text-sm max-sm:h-6
             md:h-9 md:px-6'>
                <FaPlay />
                <span>Play</span>
            </button>
            <button className='flex items-center font-semibold bg-[#6d6d6ecb] text-white text-xl p-2 px-6
             rounded gap-x-3 hover:bg-gray-500 max-sm:px-2 max-sm:text-sm max-sm:h-6
             md:h-9 md:px-6'>
                <AiOutlineInfoCircle className='text-3xl max-sm:text-sm md:text-2xl' />
                <span className=''>More Info</span>
            </button>
        </div>
    </div>
  )
};

export default VideoTitle;
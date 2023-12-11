import React from 'react';
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[17%] px-[4%] bg-gradient-to-r from-black text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview.substring(100)}</p>
        <div className='flex gap-4'>
            <button className='flex items-center font-semibold bg-white text-black text-2xl p-2 px-8 rounded border gap-2 hover:bg-opacity-80'>
                <FaPlay />
                <span>Play</span>
            </button>
            <button className='flex items-center font-semibold bg-[#6d6d6ecb] text-white text-xl p-2 px-6 rounded gap-x-3 hover:bg-gray-500'>
                <AiOutlineInfoCircle className='text-3xl' />
                <span className=''>More Info</span>
            </button>
        </div>
    </div>
  )
};

export default VideoTitle;
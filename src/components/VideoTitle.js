import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/2 py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-16 rounded-lg hover:bg-opacity-20">
          <div className="text-lg flex items-center"><FaPlay/>Play</div>
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 rounded-lg hover:bg-opacity-20">
          <div className="text-lg flex items-center"><IoInformationCircleOutline/>More Info</div>
        </button>
        
      </div>
    </div>
  );
};

export default VideoTitle;

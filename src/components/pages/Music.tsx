import "../Home.css"
//import scumbag from '../../assets/s7mIhC.png'
import bg from '../../assets/istockphoto-628434980-612x612.jpg';
import { ArrowBigDown, FastForward, Play, Repeat, Rewind } from "lucide-react";
//import { useState } from "react";

export const Music = () => {
  //const [playing, setPlaying] = useState(false);
  
  return (
    <div className="dark-to-light min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-2xl drop-shadow-2xl w-80 h-80 mb-100 z-10 absolute overflow-hidden duration-500 hover:shadow-2xl">
        <img src={bg} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="rounded-4xl drop-shadow-2xl w-full lg:w-125 h-100 duration-500 shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <div className="text-3xl text-white text-center mt-50">Title</div>
        <div className="text-3xl text-white text-center">Author</div>
        <div className="flex justify-center my-5">
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="w-3/4 md:w-3/4 h-2 accent-green-300 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
          <div className="flex justify-between items-center px-4">
          {/* Left: Centered controls */}
          <div className="flex justify-center flex-1 ml-12">
            <Rewind className="w-12 h-12 text-white fill-current hover:text-green-300 cursor-pointer" />
            <Play className="w-12 h-12 text-white fill-current mx-4 hover:text-green-300 cursor-pointer" />
            <FastForward className="w-12 h-12 text-white fill-current hover:text-green-300 cursor-pointer" />
          </div>

          {/* Right: Repeat icon */}
          <div className="w-12 flex justify-end">
            <Repeat className="w-12 h-12 text-white fill-current hover:text-green-300 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-1 w-full lg:w-125 flex justify-center rounded-2xl shadow-2xl duration:500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <ArrowBigDown className="text-white fill-current w-12 h-12"></ArrowBigDown>
      </div>
    </div>
  )
}

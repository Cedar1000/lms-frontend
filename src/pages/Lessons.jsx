import React, { useEffect } from "react";
import youtube from "../assets/dummy/youtube.png";
import thumb from "../assets/dummy/thumb.png";
import bible from "../assets/dummy/bible.mp4"
import { random } from "../utility/dummy";
import ReactPlayer from 'react-player'

const Lessons = () => {
   
    
  return (
    <div className="px-5 xl:px-12 mb-24 xl:flex xl:gap-4" >
      <div className="grid gap-2  h-fit">
      <ReactPlayer url={bible} controls={true} pip={true} />
        {/* <img src={youtube}title="Blind Woodturner: Turning passion into fine art" alt="" /> */}
        <h5 className="text-xl font-medium">Blind Woodturner: Turning passion into fine art</h5>
        <p>By: John Doe</p>
        <p className="text-sm">Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.</p>
        <div>

        </div>
      </div>

      <div className="w-full">

      
      
      {random.map((item, index) => (
      <div key={index} className="flex items-center gap-2 pt-2">
        <ReactPlayer url={item.url} width={`10.5rem`} height={`5.875rem`} controls={true} />
        <div>
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.time}</p>
        </div>


      </div>
          
      ))}
      </div>
    </div>
  );
};

export default Lessons;

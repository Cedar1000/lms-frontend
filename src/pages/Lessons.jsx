import React, { useState, useRef, useEffect } from "react";
import youtube from "../assets/dummy/youtube.png";
import thumb from "../assets/dummy/thumb.png";
import bible from "../assets/dummy/bible.mp4";
import { random } from "../utility/dummy";
import ReactPlayer from "react-player";
import {faToggleOff, faToggleOn} from "@fortawesome/free-solid-svg-icons"
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Lessons = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [autoSwitch, setAutoSwitch] = useState(false);
  const playerRef = useRef(null);

  const handleVideoSelect = (url, index) => {
    setSelectedVideo(index);
    if (autoSwitch) {
      // Start playing the selected video immediately
      playerRef.current.seekTo(0);
      playerRef.current.play();
    }
  };

  const handleToggleAutoSwitch = () => {
    setAutoSwitch(!autoSwitch);
  };

  const handleVideoEnd = () => {
    if (autoSwitch && selectedVideo !== null) {
      const nextIndex = (selectedVideo + 1) % random.length;
      setSelectedVideo(nextIndex);
    }
  };

  return (
    <div className="px-5 xl:px-12 mb-24 xl:flex xl:gap-4 relative z[100]">
      <div className="flex flex-col items-start xl:fixed left-[19.4rem] top-[6rem] xl:w-[45%] xl:h-screen overflow-y-auto ">
        <ReactPlayer
          url={selectedVideo !== null ? random[selectedVideo].url : bible}
          width={`100%`}
          controls={true}
          pip={true}
          onEnded={handleVideoEnd}
        />
        {/* <img src={youtube}title="Blind Woodturner: Turning passion into fine art" alt="" /> */}
        <div className="flex justify-between w-full items-center pr-2">
        <h5 className="text-xl font-medium">
          Blind Woodturner: Turning passion into fine art
        </h5>

        <FontAwesomeIcon icon={autoSwitch ? faToggleOn : faToggleOff } title="Auto Next lesson" onClick={handleToggleAutoSwitch}/>

 

        </div>
        <p>By: John Doe</p>
        <p className="text-sm">
          Chris Fisher, also known as the Blind Woodturner, learned his craft by
          listening to hundreds of hours of YouTube videos and experimenting in
          his workshop. Now he’s a YouTube creator himself, sells his products
          worldwide, and does demonstrations all around the country.
        </p>
        <div></div>
      </div>

      <div className="ml-0 pt-5 mt-5 xl:mt-0 xl:ml-auto xl:w-fit relative right-0 overflow-y-auto">
        {random.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 pt-2 ${
              selectedVideo === index ? " bg-primary_blue rounded-sm" : ""
            }`}
            onClick={() => handleVideoSelect(item.url, index)}
          >
            <ReactPlayer
              url={item.url}
              width={`8.5rem`}
              height={`5.875rem`}
              controls={true}
            />
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

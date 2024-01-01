import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../utility/axios';

//assets
import playvideo from '../assets/svg/play-video.svg';
import bible from '../assets/dummy/bible.mp4';
import { random } from '../utility/dummy';
import ReactPlayer from 'react-player';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Lessons = () => {
  const { courseId } = useParams();

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [autoSwitch, setAutoSwitch] = useState(false);
  const [lessons, setLessons] = useState(null);
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const playerRef = useRef(null);

  const fetchLessons = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/lessons?course=${courseId}`);

      const response2 = await axios.get(`/course/${courseId}`);
      setCourse(response2.data.doc);
      setLessons(response.data.doc);
      setSelectedVideo(response.data.doc[0]);
      console.log(response.data.doc);
    } catch (error) {
      console.error(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  const handleVideoSelect = (lesson) => {
    setSelectedVideo(lesson);
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
    <div>
      {isLoading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div className="px-5 xl:px-12 mb-24 xl:flex xl:gap-4 relative z[100]">
          <div className="flex flex-col items-start xl:fixed left-[19.4rem] top-[6rem] xl:w-[45%] xl:h-screen overflow-y-auto ">
            <h1 className="hidden text-2xl md:block m-2">{course?.title}</h1>
            <ReactPlayer
              url={selectedVideo?.link}
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

              <FontAwesomeIcon
                icon={autoSwitch ? faToggleOn : faToggleOff}
                title="Auto Next lesson"
                onClick={handleToggleAutoSwitch}
              />
            </div>
            <p>By: John Doe</p>
            <p className="text-sm">
              Chris Fisher, also known as the Blind Woodturner, learned his
              craft by listening to hundreds of hours of YouTube videos and
              experimenting in his workshop. Now he’s a YouTube creator himself,
              sells his products worldwide, and does demonstrations all around
              the country.
            </p>
            <div></div>
          </div>

          <div className="ml-0 pt-5 mt-5 xl:mt-0 xl:ml-auto xl:w-fit relative right-0 overflow-y-auto">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 pt-2 cursor-pointer ${
                  selectedVideo === index ? ' bg-primary_blue rounded-sm' : ''
                }`}
                onClick={() => handleVideoSelect(lesson)}
              >
                <img width="120px" src={playvideo} />
                <div>
                  <p>Lesson</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;

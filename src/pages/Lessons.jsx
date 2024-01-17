import { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import loadingicon from '../assets/loading icon.gif';

import axios from '../utility/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//assets
import playvideo from '../assets/svg/play-video.svg';
import { random } from '../utility/dummy';
import ReactPlayer from 'react-player';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Lessons = () => {
  const { courseId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCourseParam = queryParams.get('course');
  const parsedSelectedCourse = selectedCourseParam
    ? JSON.parse(decodeURIComponent(selectedCourseParam))
    : null;

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [autoSwitch, setAutoSwitch] = useState(false);
  const [lessons, setLessons] = useState(null);
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { instructor, name, description } = selectedCourse || {};
  const [isCompleted, setIsCompleted] = useState(false);

  const playerRef = useRef(null);

  useEffect(() => {
    if (parsedSelectedCourse) {
      setSelectedCourse(parsedSelectedCourse);
    }
  }, [parsedSelectedCourse]);

  useEffect(() => {
    const isCourseCompleted = localStorage.getItem(
      `course_${courseId}_completed`
    );
    setIsCompleted(!!isCourseCompleted);
  }, [courseId]);
  const fetchLessons = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `/lessons?course=${courseId}&sort=number`
      );

      const response2 = await axios.get(`/course/${courseId}`);
      setCourse(response2.data.doc);
      setLessons(response.data.doc);
      setSelectedVideo(response.data.doc[0]);
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

  const data = {
    name,
    description,
    instructor,
  };

  const markCourseAsCompleted = async () => {
    try {
      await axios.patch(`/course/mark-as-completed/${courseId}`, data);

      setIsCompleted(true);
      toast.success('Course completed');

      localStorage.setItem(`course_${courseId}_completed`, 'true');
    } catch (error) {
      toast.error('Failed to mark course as completed');
      console.error('Error marking course as completed:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <img src={loadingicon} alt="loading icon" className="w-36" />
        </div>
      ) : lessons && lessons.length > 0 ? (
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
              <h5 className="text-xl font-medium py-2">
                {selectedVideo?.title}
              </h5>

              <FontAwesomeIcon
                icon={autoSwitch ? faToggleOn : faToggleOff}
                title="Auto Next lesson"
                onClick={handleToggleAutoSwitch}
              />
            </div>{' '}
            <p className="text-sm">{selectedVideo?.description}</p>
            <div></div>
          </div>

          <div className="ml-0 pt-5 mt-5 xl:mt-0 xl:ml-auto xl:w-fit relative right-0 overflow-y-auto">
            <button
              className="bg-tertiary_blue py-2 px-3 rounded-md ml-6 lg:ml-8 my-6 md:ml-1 md:my-1 "
              onClick={markCourseAsCompleted}
              disabled={isCompleted}
            >
              {isCompleted ? 'Completed' : 'Mark as completed'}
            </button>
            {lessons?.map((lesson, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 pt-2 cursor-pointer ${
                  selectedVideo === index ? ' bg-primary_blue rounded-sm' : ''
                }`}
                onClick={() => handleVideoSelect(lesson)}
              >
                <img width="120px" src={playvideo} />

                <div>
                  <p>{lesson.title}</p>
                  <p>
                    {lesson.description.slice(0, 40)} {'...'}
                  </p>
                  <p>{lesson.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Placeholder message when lessons array is empty
        <div className="flex justify-center items-center w-full h-screen">
          <p className="text-2xl">No lessons yet for this course.</p>
        </div>
      )}
    </div>
  );
};

export default Lessons;

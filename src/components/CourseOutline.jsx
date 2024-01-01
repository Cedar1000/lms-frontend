import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../utility/axios';

//assets
import iconfirst from '../assets/iconfirst.png';
import iconsecond from '../assets/iconsecond.png';

// eslint-disable-next-line react/prop-types
const CourseOutline = ({ limit = 100 }) => {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/course?limit=${limit}`);
      setCourses(response.data.doc);
    } catch (error) {
      console.error(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2 className="p-4 text-center">Loading...</h2>
      ) : (
        <div className="w-full flex justify-between gap-y-4 flex-grow-1 flex-wrap mt-12">
          {courses?.map((course, index) => (
            <div
              key={index}
              className="w-full md:w-60 bg-shadedblue p-8 flex flex-col items-center rounded-lg shadow-full"
            >
              <h1 className="mb-6">{course.name}</h1>
              <div className="space-y-2">
                <h2 className="flex items-center gap-3 ">
                  <span>
                    <img src={iconfirst} alt="first arrow" />
                  </span>
                  {`Instructor: ${course.instructor}`}
                </h2>
                <h2 className="flex items-center gap-3">
                  <span>
                    <img src={iconsecond} alt="second arrow" />
                  </span>
                  {`Lessons: ${course.lessonCount}`}
                </h2>
              </div>
              <Link
                to={`/lms/lessons/${course.id}`}
                className="mx-auto bg-tertiary_blue px-6 py-2 rounded-lg mt-6 w-full text-center"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseOutline;

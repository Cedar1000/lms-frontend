import { useEffect, useState } from 'react';

//components
import CourseCard from './CourseCard';

import loadingicon from '../assets/loading icon.gif';
import axios from '../utility/axios';

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
        <div className="flex justify-center items-center w-full h-screen">
          <img src={loadingicon} alt="loading icon" className="w-36" />
        </div>
      ) : (
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-4  mt-12">
          {courses?.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseOutline;

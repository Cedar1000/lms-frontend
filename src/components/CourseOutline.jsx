import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loadingicon from "../assets/loading icon.gif";
import axios from "../utility/axios";

//assets
import iconfirst from "../assets/iconfirst.png";
import iconsecond from "../assets/iconsecond.png";

// eslint-disable-next-line react/prop-types
const CourseOutline = ({ limit = 100 }) => {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const navigate = useNavigate();



  // Function to handle the click event of the "View" button
  const handleViewClick = (course) => {
    setSelectedCourse(course);
    // if (course.paid) {
    //   // If paid, navigate to the lessons page
    //  navigate(`/lms/lessons/${course.id}?selectedCourse=${encodeURIComponent(JSON.stringify(course))}`);
    // } else {
    //   // If not paid, navigate to the payment gateway page
    //   navigate(`/payment-gateway/${course.id}`);
    // }
   
  };

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/course?limit=${limit}`);
      setCourses(response.data.doc);
      console.log(response.data.doc);
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
                 to={`/lms/lessons/${course.id}?selectedCourse=${encodeURIComponent(JSON.stringify(course))}`}
                  className="mx-auto bg-tertiary_blue px-6 py-2 rounded-lg mt-6 w-full text-center"  
                >
                  <button onClick={() => handleViewClick(course)}>View</button>
                </Link>

                
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseOutline;

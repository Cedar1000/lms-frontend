import { useState, useEffect } from 'react';
import axios from '../utility/axios';

//assets
import progresscourse from '../assets/progresscourseicon.png';
import certificateearned from '../assets/certificateearned.png';
import completedcourse from '../assets/completedcourseicon.png';

const Overview = () => {
  const [overview, setOverview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getOverview = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/users/overview');
      setOverview(response.data);
    } catch (error) {
      console.error(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOverview();
  }, []);

  return (
    <div>
      <div>
        {isLoading ? (
          <h2 className="text-center">Loading....</h2>
        ) : (
          <div className="w-full flex justify-between gap-y-4 flex-wrap">
            <div className="flex justify-between border border-solid border-slate-300 w-full md:w-60 px-3 py-2 rounded-3xl">
              <div className="flex gap-2">
                <img src={progresscourse} alt="Course Logo" />
                <h2>Total Courses</h2>
              </div>
              <p>{overview?.courses}</p>
            </div>

            <div className="flex justify-between border border-solid border-slate-300 w-full md:w-60 px-3 py-2 rounded-3xl">
              <div className="flex gap-2">
                <img src={progresscourse} alt="Course Logo" />
                <h2>Total Assignments</h2>
              </div>
              <p>{overview?.assignments}</p>
            </div>

            <div className="flex justify-between border border-solid border-slate-300 w-full md:w-60 px-3 py-2 rounded-3xl">
              <div className="flex gap-2">
                <img src={completedcourse} alt="Course Logo" />
                <h2>Completed Courses</h2>
              </div>
              <p>{overview?.completed}</p>
            </div>

            <div className="flex justify-between border border-solid border-slate-300 w-full md:w-60 px-3 py-2 rounded-3xl">
              <div className="flex gap-2">
                <img src={certificateearned} alt="Course Logo" />
                <h2>Course In Progress</h2>
              </div>
              <p>{overview?.inProgress}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;

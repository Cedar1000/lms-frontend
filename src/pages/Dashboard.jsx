import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import waving from '../assets/wavingemoji.png';
import Overview from '../components/Overview';
import CourseOutline from '../components/CourseOutline';
import Notifications from '../components/Notifications';
import Assignments from '../components/Assignments';

const Dashboard = () => {
  const [firstName, setfirtName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const { firstName } = user;
      setfirtName(firstName);
    }
  }, []);

  return (
    <div className="main-sec text-white min-h-screen">
      <main className="main w-full p-12 min-h-screen  bg-primary_blue  md:bg-secondary_blue ">
        <div className="profile-icon mt-4">
          <h1 className="user flex items-center text-2xl font-semibold gap-2">
            Hello {firstName}
            <span>
              <img src={waving} alt="waving emoji" />
            </span>
          </h1>
          <p className="text-dullwhite">Lets learn something new today!</p>
          <div>
            <h1 className="text-3xl py-6">Overview</h1>
            <Overview />
          </div>
        </div>

        <div>
          <div className="flex justify-between flex-wrap gap-3 items-start w-full mt-12">
            <div className="space-y-3">
              <h1 className="text-2xl">Recent courses</h1>
              <p className="text-dullwhite">
                Upskill with our expertly selected courses
              </p>
            </div>
            <Link
              to={'/lms/courses'}
              className="bg-tertiary_blue px-6 py-2 rounded-lg"
            >
              Go To Courses
            </Link>
          </div>
          <CourseOutline limit={4} />
        </div>

        <div className="mt-12 flex gap-8 w-full flex-wrap">
          <Notifications />
          <Assignments />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

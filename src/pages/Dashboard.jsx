import React, { useEffect, useState } from "react";
import logo from "../assets/svg/logo.svg";
import bell from "../assets/svg/bell.svg";
import waving from '../assets/wavingemoji.png'
import progresscourse from '../assets/progresscourseicon.png'
import Overview from '../components/Overview'
import CourseOutline from "../components/CourseOutline";
import Announcement from "../components/Announcement";
import Assignments from "../components/Assignments";

const Dashboard = () => {
  const [profile, setProfile] = useState({});
  const [coursesCount, setCoursesCount] = useState(0);
  // const [assignments, setAssignments] = useState([]);

  // useEffect(() => {
  //   const users = sessionStorage.getItem('user');
  //   const profileData = JSON.parse(users);
  //   setProfile(profileData.user);

  //   const accessToken = profileData.access_token;
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${accessToken}`,
  //   };

  //   // Fetch courses
  //   fetch('https://lms-boo.onrender.com/stack/course/', {
  //     method: 'GET',
  //     headers: headers,
  //   })
  //     .then(response => response.json())
  //     .then(courses => {
  //       setCoursesCount(courses.length);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching course:', error);
  //     });

  //   // Fetch assignments
  //   fetch('https://lms-boo.onrender.com/stack/assignment', {
  //     headers: headers,
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setAssignments(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching assignments:', error);
  //     });
  // }, []);

  return (
    <div className="main-sec flex text-white min-h-screen">
      <nav className="nav hidden md:block w-1/5 p-4 bg-primary_blue">
        {/* Navigation content */}
      </nav>

      <main className="main w-full md:w-4/5 p-12 min-h-screen  bg-secondary_blue">
        <section className="nav-sec flex justify-between items-center mb-4">
          <h1 className="hidden text-2xl md:block">Dashboard</h1>

          <img src={logo} className="md:hidden" alt="logo" />
          <h1 className="md:hidden font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full ">
            JA
          </h1>


          <div className=" flex justify-center border-[#1F1D39] p-[0.59rem] w-fit rounded-[0.587rem] bg-icon_blue">
            <img src={bell} alt="alert-icon" />
          </div>
        </section>



        <div className="profile-icon mt-8">
          
          <h1 className="user flex items-center text-2xl font-semibold gap-2">
            {profile.firstname} {profile.lastname}
            Hello Jane 
            <span><img src={waving} alt="waving emoji" /></span>
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
              <h1 className="text-2xl">All courses</h1>
              <p className="text-dullwhite">Upskill with our expertly selected courses</p>
            </div>
            <button className="bg-tertiary_blue px-6 py-2 rounded-lg">Go To Courses</button>
          </div>
          <CourseOutline />
        </div>

        <div className="mt-12 flex gap-8 w-full flex-wrap">
          <Announcement/>
          <Assignments/>
       </div>
      </main>
    </div>
  );
};

export default Dashboard;

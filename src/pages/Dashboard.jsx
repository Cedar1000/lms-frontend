import React, { useEffect, useState } from "react";
import logo from "../assets/svg/logo.svg";
import bell from "../assets/svg/bell.svg";

const Dashboard = () => {
  const [profile, setProfile] = useState({});
  const [coursesCount, setCoursesCount] = useState(0);
  const [assignments, setAssignments] = useState([]);

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
    <div className="main-sec flex text-white">
      <nav className="nav hidden md:block w-1/5 p-4 bg-primary_blue">
        {/* Navigation content */}
      </nav>

      <main className="main w-full md:w-4/5 p-4 h-full  bg-secondary_blue">
        <section className="nav-sec flex justify-between items-center mb-4">
          <h1 className="hidden md:block">Dashboard</h1>
          <img src={logo} className="md:hidden" alt="logo" />
          <h1 className=" font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full ">
            JA
          </h1>
          <div className=" flex justify-center border-[#1F1D39] p-[0.59rem] w-fit rounded-[0.587rem] bg-icon_blue">
            <img src={bell} alt="alert-icon" />
          </div>
        </section>



        <header className="profile-icon flex items-center gap-4">
          <img src="../assets/icons-bell.png" alt="icon" />
          <img src="../assets/icons-mail.png" alt="icon" />
          <p className="user">
            {profile.firstname} {profile.lastname}
          </p>
          <img src="../assets/ellipse-1.png" alt="icon" />
        </header>

        {/* Rest of your dashboard content */}
        <h2 className="head">Overview</h2>
        <div className="view-div">{/* Overview content */}</div>

        <h2 className="course-head head">New Courses</h2>
        <div className="New-Courses grid grid-cols-2 gap-4">
          {/* New Courses content */}
        </div>

        <section className="message-assign flex gap-4">
          <article className="flex-1">
            <h2>Messages</h2>
            {/* Messages content */}
          </article>

          <aside className="flex-1">
            <h2>Assignment</h2>
            {/* Assignments content */}
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import dashboard from "../assets/svg/dashboard.svg";
import courses from "../assets/svg/courses.svg";
import settings from "../assets/svg/settings.svg";
import logout from "../assets/svg/logout.svg";
import Li from "../components/elements/Li";

const MainLayout = () => {
    const location = useLocation();

    const getLinkStyle = (path) => ({
      backgroundColor: location.pathname === path ? "#197ED2" : "",
    });
  return (
    <div className="main-sec flex text-white min-h-screen relative">
      <nav className="nav fixed h-screen hidden md:flex md:flex-col md:justify-between w-[12.5rem] lg:w-[15.5rem] xl:w-[17.5rem]  p-4 bg-primary_blue ">
        <div className="mt-6 xl:mt-12">
          <img src={logo} alt="Logo-icon" />
          <ul className="grid gap-6 font-medium mt-16 lg:mt-20 xl:mt-28">
            <Li
              to="/lms/dashboard"
              src={dashboard}
              style={getLinkStyle("/lms/dashboard")}
              className={`gap-[0.55rem]`}
              alt="Dashboard-icon"
            >
              Dashboard
            </Li>
            <Li
              to="/lms/courses"
              src={courses}
              style={getLinkStyle("/lms/courses")}
              className={`gap-[0.88rem]`}
              alt="Courses-icon"
            >
              My Courses
            </Li>
            <Li
              to="/lms/settings"
              src={settings}
              style={getLinkStyle("/lms/settings")}
              className={`gap-[0.88rem] `}
              alt="Settings-icon"
            >
              Settings
            </Li>
          </ul>
        </div>
        <div className=" lg:ml-[2rem] xl:mb-[4rem]  w-fit p-4 mx-auto rounded-3xl">
          <h1 className=" font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full mx-auto">
            JA
          </h1>
          <h1 className="text-2xl font-semibold mx-auto mt-4 mb-2">John Doe</h1>
          <p className="flex items-center gap-[0.88rem]">
            <img src={settings} alt="logout-icon" />
            Log out
          </p>
        </div>
      </nav>

      <main className="main w-full  lg:ml-[15.4rem] md:ml-[12.4rem] xl:ml-[17.4rem] min-h-screen bg-primary_blue  md:bg-secondary_blue ">
        <Outlet />
        <footer>
          <div className="flex justify-between fixed bottom-0 w-full md:hidden px-[2.31rem] items-center gap-4 py-4 bg-[#00213C]">
            <Link
              to="/lms/dashboard"
              style={getLinkStyle("/lms/dashboard")}
              className={`bg-shadedblue w-11 h-[2.68rem] flex justify-center items-center hover:bg-tertiary_blue`}
              title="dashboard"
             
              
            >
              <img src={dashboard} alt="dashboard-icon" />
            </Link>
            <Link
              to={`/lms/courses`}
              style={getLinkStyle("/lms/courses")}
              className={`bg-shadedblue w-11 h-[2.68rem] flex justify-center items-center hover:bg-tertiary_blue`}
                title="courses"
            >
        
              <img src={courses} alt="dasboard-icon" />{" "}
            </Link>
            <Link
              to={`/lms/settings`}
              style={getLinkStyle("/lms/settings")}
              className={`bg-shadedblue w-11 h-[2.68rem] flex justify-center items-center hover:bg-tertiary_blue`}
              title="settings"
            >
            
              <img src={settings} alt="dasboard-icon" />{" "}
            </Link>
            <p
              className={`bg-shadedblue w-11 h-[2.68rem] flex justify-center items-center hover:bg-tertiary_blue`}
              title="logout"
            >
        
              <img src={logout} alt="dasboard-icon" />{" "}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainLayout;

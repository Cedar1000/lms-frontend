import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import bell from "../assets/svg/bell.svg";
import dashboard from "../assets/svg/dashboard.svg";
import courses from "../assets/svg/courses.svg";
import settings from "../assets/svg/settings.svg";
import logout from "../assets/svg/logout.svg";
import Li from "../components/elements/Li";

import NotificationModal from "../modals/NotificationModal";

const MainLayout = ({ defaultTitle }) => {
  
  const [isNotificationShown, setIsNotificationShown] = useState(false)
  const [userInitials, setUserInitials] = useState("");
  const [firtName, setfirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleNotificationModal = () => {

    setIsNotificationShown(!isNotificationShown)
  }

    const location = useLocation();
    const currentRoute = location.pathname.replace("/lms/", "").replace(/^\w/, (c) => c.toUpperCase());
   const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.clear();
      navigate("/");
    }

    useEffect(() => {
      
      const userData = JSON.parse(localStorage.getItem("userData"));
      const user = userData?.user;
      
    
      if (userData) {
        
        const { firstName, lastName, email } = user;
        setfirtName(firstName);
        setLastName(lastName);
    
    
  
        const firstNameInitial = firstName ? firstName.charAt(0).toUpperCase() : "";
        const lastNameInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
    
       
        const initials = `${firstNameInitial}${lastNameInitial}`;
        setUserInitials(initials);
      }
    }, []);

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
        <div className="space-y-2 lg:ml-[2rem] xl:mb-[4rem]  w-fit rounded-3xl">
          <h1 className=" font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full mx-auto">
           {userInitials}
          </h1>
          <h1 className="text-2xl font-semibold mt-4 mb-2">{firtName} <br /> {lastName}</h1>
          <p className="flex gap-[0.88rem]" onClick={handleLogout}>
            <img src={settings} alt="logout-icon" />
            Log out
          </p>
        </div>
      </nav>

      <main className="main w-full  lg:ml-[15.4rem] md:ml-[12.4rem] xl:ml-[17.4rem] min-h-screen bg-primary_blue  md:bg-secondary_blue relative">
      <section className="nav-sec flex justify-between items-center my-4 pt-7 xl:px-12 px-5">
          <h1 className="hidden text-2xl md:block">{currentRoute || defaultTitle}</h1>

          <img src={logo} className="md:hidden" alt="logo" />
          <h1 className="md:hidden font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full ">
            {userInitials}
          </h1>

        

          {/* here's where we are editing */}

          <div className=" flex justify-center border-[#1F1D39] p-[0.59rem] w-fit rounded-[0.587rem] bg-icon_blue cursor-pointer" onClick={()=>(setIsNotificationShown(true))}>
            <img src={bell} alt="alert-icon" />
          </div>

          {isNotificationShown && (
            <NotificationModal handleNotificationModal={handleNotificationModal} />
          )}
        </section>
        <Outlet  />
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
              title="logout" onClick={handleLogout}
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

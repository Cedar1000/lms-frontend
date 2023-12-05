import React from "react";
import MainLayout from "./MainLayout";
import logo from "../assets/svg/logo.svg";
import bell from "../assets/svg/bell.svg";
import Button from "../components/elements/Button";
import Stack from "../components/coursescomponents/Stack";
import MyCourses from "../components/coursescomponents/MyCourses";
import ClassNotification from "../components/coursescomponents/classnotification";
import UpcomingClasses from "../components/coursescomponents/UpcomingClasses";

const Courses = () => {
  return (
    <MainLayout>
      <div className="pt-7 px-5">
        <section className="flex justify-between items-center  mb-4">
          <h1 className="hidden font-semibold text-2xl md:block">Course Management</h1>

          <img src={logo} className="md:hidden" alt="logo" />
          <h1 className="md:hidden font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full ">
            JA
          </h1>

          <div className=" flex justify-center border-[#1F1D39] p-[0.59rem] w-fit rounded-[0.587rem] bg-icon_blue">
            <img src={bell} alt="alert-icon" />
          </div>
        </section>
        <section className="mt-10">
          <div className="section-head">
          
            <h2 className="text-2xl font-medium">Add New Course</h2>
            <p className="text-xs mt-2 text-textpink">
              It is a long established fact that a reader will be distracted by
              the readable <br /> content of a page when looking at its layout
            </p>
          </div>

          <h3 className=" text-[1.25rem] mt-[1.63rem] font-medium">Select Stack</h3>
         
          <Stack />
          
          <div className="mt-24">
            <h1 className="text-2xl font-medium">My Courses(2)</h1>
            <MyCourses />
          </div>

          <div className="flex gap-x-44 items-center flex-wrap mb-24">
            <ClassNotification />
            <UpcomingClasses />
          </div>
          <p className="load"></p>
        </section>
      </div>
    </MainLayout>
  );
};

export default Courses;

import React from "react";
import MainLayout from "./MainLayout";
import logo from "../assets/svg/logo.svg";
import bell from "../assets/svg/bell.svg";
import Button from "../components/elements/Button";
import SelectCourse from "../components/courses/SelectCourse";

const Courses = () => {
  return (
    
      <div className="pt-7 px-5">
        <section className="flex justify-between items-center  mb-4">
          <h1 className="hidden font-semibold text-2xl md:block">
            Course Management
          </h1>

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
            <p className="text-sm mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>

          <h3 className=" text-[1.25rem] mt-[1.63rem] font-medium">
            Select Stack
          </h3>
          <div>
            <SelectCourse />
          </div>
        </section>
      </div>
    
  );
};

export default Courses;

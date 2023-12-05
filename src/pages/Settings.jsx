import React from "react";
import MainLayout from "./MainLayout";
import logo from "../assets/svg/logo.svg";
import bell from "../assets/svg/bell.svg";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";

const Settings = () => {
  return (
    <MainLayout>
      <div className="mb-[10.56rem] xl:px-12">
        <section className="flex justify-between items-center pt-7 px-5 mb-4">
          <h1 className="hidden text-2xl md:block">Edit Profile</h1>

          <img src={logo} className="md:hidden" alt="logo" />
          <h1 className="md:hidden font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full ">
            JA
          </h1>

          <div className=" flex justify-center border-[#1F1D39] p-[0.59rem] w-fit rounded-[0.587rem] bg-icon_blue">
            <img src={bell} alt="alert-icon" />
          </div>
        </section>
        <div className="flex items-center gap-4 w-fit mx-5 mt-16">
          <h1 className=" font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full mx-auto">
            JA
          </h1>
          <div>
            <h1 className="text-2xl font-semibold ">John Doe</h1>
            <p>Ebilambert56@gmail.com</p>
          </div>
        </div>
        <section className="mx-5 lg:flex justify-between xl:gap-20 lg:gap-10">
          <div className="lg:w-full">
            <h2 className=" text-2xl font-semibold mt-12 mb-6">Personal Information</h2>
            <form action="" >
              <Input
                label="First Name"
                labelClass={``}
                className="w-full mt-2"
                type="text"
                name="firstname"
              />
              <Input
                label="Last Name"
                labelClass="pb-2"
                inputClass={`my-6`}
                className="w-full mt-2"
                type="text"
                name="lastname"
              />
              <Input
                label="phone"
                inputClass={`mb-[2.25rem]`}
                labelClass="pb-2"
                className="w-full mt-2"
                type="tel"
                name="phone"
              />
              <Button type={"submit"} className={"block mx-auto px-[5.5rem]"}>Save Changes</Button>
            </form>
          </div>
          <div className=" lg:w-full">
            <h2 className=" text-2xl font-semibold mt-12 mb-6">Change Password</h2>
            <form action="">
              <Input
                label="New Password"
                labelClass="text-lg"
                className="w-full mt-2"
                type="password"
                name="newpassword"
              />
              <Input
                label="Confirm Password"
                inputClass={`mb-[2.25rem] mt-6`}
                className="w-full mt-2"
                type="password"
                name="confirmpassword"
              />
              <Button type={"submit"} className={"block mx-auto px-[4.5rem]"}>Change Password</Button>
            </form>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Settings;

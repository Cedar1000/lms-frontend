import React, { useEffect, useState } from 'react';
import MainLayout from './MainLayout';
import logo from '../assets/svg/logo.svg';
import bell from '../assets/svg/bell.svg';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';

const Settings = () => {
  const [userInitials, setUserInitials] = useState('');
  const [firtName, setfirtName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const user = userData?.user;

    if (userData) {
      const { firstName, lastName, email } = user;
      setfirtName(firstName);
      setLastName(lastName);
      setEmail(email);

      const firstNameInitial = firstName
        ? firstName.charAt(0).toUpperCase()
        : '';
      const lastNameInitial = lastName ? lastName.charAt(0).toUpperCase() : '';

      const initials = `${firstNameInitial}${lastNameInitial}`;
      setUserInitials(initials);
    }
  }, []);
  return (
    <div className="mb-[10.56rem] xl:px-12">
      <div className="flex items-center gap-4 w-fit mx-5 mt-16">
        <h1 className=" font-bold border-[4px] border-[#0756CD] p-[0.39rem] w-fit rounded-full mx-auto">
          {userInitials}
        </h1>
        <div>
          <h1 className="text-2xl font-semibold ">
            {firtName} {lastName}
          </h1>
          <p>{email}</p>
        </div>
      </div>
      <section className="mx-5 lg:flex justify-between xl:gap-20 lg:gap-10">
        <div className="lg:w-full">
          <h2 className=" text-2xl font-semibold mt-12 mb-6">
            Personal Information
          </h2>
          <form action="">
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
            <Button type={'submit'} className={'block mx-auto px-[5.5rem]'}>
              Save Changes
            </Button>
          </form>
        </div>
        <div className=" lg:w-full">
          <h2 className=" text-2xl font-semibold mt-12 mb-6">
            Change Password
          </h2>
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
            <Button type={'submit'} className={'block mx-auto px-[4.5rem]'}>
              Change Password
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Settings;

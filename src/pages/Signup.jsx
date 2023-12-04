import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../assets/auth.png';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import Layout from './Layout';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form Data:', formData);
  };

  return (
    <Layout className="w-48" wrapper="lg:h-full">
      <div className=" text-center lg:text-left lg:self-start">
          <p className=" text-4xl font-semibold">Sign Up</p>
          <p className=' text-xl'>Please fill this form to create an account.</p>
        </div>

        <form id="sign-up-form" onSubmit={handleSignup} className="mt-10 grid gap-6 lg:w-full ">
          <Input
            label="First Name"
            labelClass="text-lg"
            className="w-full"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Last Name"
            labelClass="text-lg"
            className="w-full"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Email Address"
            labelClass="text-lg"
            className="w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Phone Number"
            labelClass="text-lg"
            className="w-full"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <div className="passworddiv">
            <Input
              label="Password"
            labelClass="text-lg"
              className="w-full"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="(Password should be up to 8 characters)"
            />
          </div>
          <Input
            label="Confirm Password"
            labelClass="text-lg"
            className="w-full"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />

          <div className="checkdiv">
            <Input
            inputClass={'flex gap-2 w-fit items-center flex-row-reverse'}
              label="I agree to the terms and conditions"
              labelClass="text-lg"
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="w-4 h-4"
              required
            />
            
          </div>

          <div className="flex flex-col justify-center items-center">
            <Button type="submit" className={''}>Sign Up</Button>
            <p className='text-[#E0E0E0] mt-6'>
              Already have an account? <Link to="/" className='text-tertiary_blue'>Sign in</Link>
            </p>
          </div>
        </form>
    </Layout>
  );
};

export default Signup;

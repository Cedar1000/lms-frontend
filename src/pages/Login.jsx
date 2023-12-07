import React, { useState } from 'react';
import Layout from './Layout';
import Button from '../components/elements/Button';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../components/elements/Input';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form Data:', formData);
    navigate('/lms/dashboard');
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>


      <div className="Welcome text-center mt-10">
          <p className="text-2xl font-semibold mb-2">Welcome Back!</p>
          <p>Welcome back! Please enter your details.</p>
        </div>

        <form className="mt-10 grid gap-6 lg:w-full " id="login-form" onSubmit={handleLogin}>

        <Input 
          label="Email Address"
          type="email"
          name="email"
          placeholder="Myschoolemail.edu.ng"
          className="w-full"
          required
          value={formData.email}
          onChange={handleInputChange}
         

        
        />
         

          <div>
            <p className="inputname">Password</p>
            <div className="flex items-center w-full p-3 rounded-lg border-2 border-[#E0E0E0]" id="login-password">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="********************"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none"
              />
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash } className="eyeicon" onClick={togglePasswordVisibility} />
            </div>
          </div>

          <div className="flex justify-between items-center">
          <Input
            inputClass={'flex gap-2 items-center flex-row-reverse'}
              label="Remember me"
            labelClass=" w-full flex-1"
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="w-4 h-4"
              required
            />
            <p><i>Forgot Password?</i></p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Button type="submit" className={''}>Login</Button>
            <p className=' mt-6 text-[#E0E0E0]'>
              Already have an account? <Link to="/signup"><em className=' text-tertiary_blue'>Sign Up</em></Link>
            </p>
          </div>
        </form>
     
    </Layout>
   
  );
};

export default Login;

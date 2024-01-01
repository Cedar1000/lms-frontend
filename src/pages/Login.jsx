import { useState } from 'react';
import Layout from './Layout';
import Button from '../components/elements/Button';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../components/elements/Input';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      password: formData.password,
    };
    const url = import.meta.env.VITE_APP_BASE_URL;

    try {
      setIsLoading(true);
      const response = await axios.post(`${url}/users/login`, data);
      console.log('login', response.data);

      const { accessToken, user } = response.data;

      if (response.status === 200) {
        toast.success('Login successful!');

        localStorage.setItem('token', JSON.stringify(accessToken));
        localStorage.setItem('user', JSON.stringify(user));

        setIsLoading(false);
        navigate('/lms/dashboard');
      } else {
        toast.error('Login failed.');
      }
    } catch (error) {
      toast.error('login failed. Please try again.');
    }
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

      <form
        className="mt-10 grid gap-6 lg:w-full "
        id="login-form"
        onSubmit={handleLogin}
      >
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
          <div
            className="flex items-center w-full p-3 rounded-lg border-2 border-[#E0E0E0]"
            id="login-password"
          >
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="********************"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="eyeicon"
              onClick={togglePasswordVisibility}
            />
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
          {/* <p>
            <i>Forgot Password?</i>
          </p> */}

          <Link to="/forgotpassword" className="text-tertiary_blue">
            <i>Forgot Password?</i>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Button type="submit" className={''}>
            {isLoading ? 'Login....' : 'Login'}
          </Button>
          <p className=" mt-6 text-[#E0E0E0]">
            Already have an account?{' '}
            <Link to="/signup">
              <em className=" text-tertiary_blue">Sign Up</em>
            </Link>
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default Login;

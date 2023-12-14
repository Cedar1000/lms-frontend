import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../assets/auth.png";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "confirmPassword") {
      setPasswordMatch(value === formData.password);
    }
  };

  const navigate = useNavigate();
  const url= import.meta.env.VITE_APP_BASE_URL;


  const handleSignup = async (e) => {
    e.preventDefault();

    if (passwordMatch) {
     const data = {
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        passwordConfirm: formData.confirmPassword,
      };
      

      try {
        setIsLoading(true);
        const response = await axios.post(`${url}/api/v1/users/signup`, data);

      if (response.status === 201) {
        toast.success("Registration successful!");
        localStorage.setItem("userData", response.data);
        setIsLoading(false);
        navigate('/')

      } else {
        
        toast.error("Registration failed.");
      }
    } catch (error) {
        toast.error("Registration failed.");
    }

    } else {
      toast.error("Passwords do not match");
    }

  };

  return (
    <Layout className="w-48" wrapper="lg:h-full">
      <div className=" text-center lg:text-left lg:self-start">
        <p className=" text-4xl font-semibold">Sign Up</p>
        <p className=" text-xl">Please fill this form to create an account.</p>
      </div>

      <form
        id="sign-up-form"
        onSubmit={handleSignup}
        className="mt-10 grid gap-6 lg:w-full "
      >
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
            inputClass={"flex gap-2 w-fit items-center flex-row-reverse"}
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
          <Button type="submit" className={""}>
            {isLoading ? "creating acct..." : "Sign Up"}
          </Button>
          <p className="text-[#E0E0E0] mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-tertiary_blue">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default Signup;

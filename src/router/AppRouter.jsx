import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Courses from "../pages/Courses";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={`/`} element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/dashboard`} element={<Dashboard />} />
        <Route path={`/courses`} element={<Courses />} />
        <Route path={`/settings`} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

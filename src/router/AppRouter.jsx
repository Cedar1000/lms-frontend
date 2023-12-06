import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Courses from "../pages/Courses";
import MainLayout from "../pages/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={`/`} element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/lms`} element={<MainLayout />}>
        <Route path={`/lms/dashboard`} element={<Dashboard />} />
        <Route path={`/lms/courses`} element={<Courses />} />
        <Route path={`/lms/settings`} element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

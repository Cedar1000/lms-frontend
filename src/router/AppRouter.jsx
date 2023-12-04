import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={`/`} element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/dashboard`} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

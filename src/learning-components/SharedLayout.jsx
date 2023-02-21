import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;

import React from "react";
import { Link } from "react-router-dom";
import Birthday from "../birthday_project/Birthday";

const NavBar = () => {
  return (
    <div>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/birthday" className="btn">
        Birthday
      </Link>
      <Link to="/chiricea_alexandru" className="btn">
        Alex
      </Link>
    </div>
  );
};

export default NavBar;

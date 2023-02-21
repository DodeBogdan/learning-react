import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import nav from "./navbarData.js";

const NavBar = () => {
  return (
    <div>
      <ul>
        {nav.map((data) => {
          return (
            <li>
              <Link to={data.path} className="navButtons">
                {data.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import nav from "./navbarData.js";

const NavBar = () => {
  return (
    <div>
      <ul>
        {nav.map((data) => {
          const { id, path, name } = data;
          return (
            <li key={id}>
              <Link to={path} className="navButtons">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;

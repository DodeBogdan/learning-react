import { useState } from "react";
import "./App.css";

import logo from "./assets/logo.png";
import UseStateList from "./learning-components/UseStateList";

function App() {
  return (
    <>
      <div>
        <img className="logo" src={logo} alt="alex c"></img>
      </div>

      <UseStateList />
    </>
  );
}

export default App;

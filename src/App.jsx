import { useState } from "react";
import "./App.css";

import logo from "./assets/logo.png";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <img className="logo" src={logo} alt="alex c"></img>
      </div>

      <div>
        <h1>{counter}</h1>
        <button className="btn" onClick={handleClick}>
          Click me
        </button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <h1 className="center-text">Alexandru Chiricea</h1>
        <h2 className="center-text">Personal trainer</h2>
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

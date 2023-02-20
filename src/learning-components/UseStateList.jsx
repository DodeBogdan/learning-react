import React, { useState } from "react";
import "./UseStateList.css";
import { data } from "./data";

const UseStateList = () => {
  const [people, setPeople] = useState(data);

  const removeFromList = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };

  const [displayPerson, setDisplayPerson] = useState({
    name: "Dode",
    age: "24",
    goal: "learn react",
  });

  const displayNewPerson = () => {
    setDisplayPerson({ name: "Silvia", age: "25", goal: "Read books" });
  };

  return (
    <div className="centerDiv">
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h1>{name}</h1>
            <button className="btn" onClick={() => removeFromList(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear list
      </button>

      <div>
        <h1>Name: {displayPerson.name}</h1>
        <h1>Age: {displayPerson.age}</h1>
        <h1>Goal: {displayPerson.goal}</h1>
        <button className="btn" onClick={() => displayNewPerson()}>
          Display person
        </button>
      </div>
    </div>
  );
};

export default UseStateList;

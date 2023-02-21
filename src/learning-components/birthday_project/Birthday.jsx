import React, { useEffect, useState } from "react";
import "./Birthday.css";
import birthdayList from "./birthdaysData";

const Birthday = () => {
  const [birthdays, setBirthdays] = useState(birthdayList);
  const [currentPage, setCurrentPage] = useState(0);
  const maxPerPage = 3;
  const numberOfPages = Math.ceil(birthdays.length / maxPerPage);

  useEffect(() => {}, []);

  return (
    <div className="birthday">
      <section className="panel">
        <h2>Happy birthdays</h2>
        {birthdays
          .slice(
            currentPage * maxPerPage,
            currentPage * maxPerPage + maxPerPage
          )
          .map((birthday) => {
            const { id, date, name } = birthday;
            return (
              <div key={id}>
                <h3>Name: {name}</h3>
                <h4>Date: {date}</h4>
              </div>
            );
          })}
        <div>
          Page:
          {[...Array(numberOfPages)].map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index);
                }}
                className="btn"
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <button type="button" className="btn mb mt">
          Clear all
        </button>
      </section>
    </div>
  );
};

export default Birthday;

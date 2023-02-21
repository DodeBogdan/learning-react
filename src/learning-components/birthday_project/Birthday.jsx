import React, { useEffect, useState } from "react";
import "./Birthday.css";
import birthdayList from "./birthdayData";

const Birthday = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const maxPerPage = 3;
  const numberOfPages = Math.ceil(birthdayList.length / maxPerPage);

  useEffect(() => {}, []);

  return (
    <div className="birthday body-component">
      <section className="panel">
        <h2>Happy birthdays</h2>
        {birthdayList
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
        <div className="mb mt pageStyle">
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
      </section>
    </div>
  );
};

export default Birthday;

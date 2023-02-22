import React, { useEffect, useState } from "react";
import "./Tours.css";
import Tour from "./Tour";

const Tours = () => {
  const url = "https://course-api.com/react-tours-project";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tourList, setTourList] = useState([]);

  const removeTour = (id) => {
    setTourList(
      tourList.filter((tour) => {
        return tour.id != id;
      })
    );
  };

  const refreshTours = () => {
    // data fetching here
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setTourList(actualData);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshTours();
  }, []);

  if (loading) {
    return (
      <div className="body-component body-restrict">
        <h1 className="title">Loading...</h1>;
      </div>
    );
  }

  if (error) {
    return (
      <div className="body-component body-restrict">
        <h1 className="title">Error...</h1>;
      </div>
    );
  }

  return (
    <div className="body-component body-restrict">
      <div className="title">
        {tourList.length != 0 ? (
          <h1>Our Tours</h1>
        ) : (
          <div>
            <h1>No Tours</h1>{" "}
            <button type="button" className="btn" onClick={refreshTours}>
              Refresh list
            </button>
          </div>
        )}
      </div>

      <div className="tours">
        {tourList.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;

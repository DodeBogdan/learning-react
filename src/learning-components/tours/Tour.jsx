import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;

  const [fullText, setFullText] = useState(false);

  return (
    <div className="tour">
      <img className="img-resp" src={image} alt={name} />
      <div className="tour-info">
        <span className="price">{price}$</span>
        <h4>{name}</h4>
        <p>
          {!fullText ? info.substring(0, 200) + "... " : info}
          <button
            type="button"
            className="read-more-or-less"
            onClick={() => {
              setFullText(!fullText);
            }}
          >
            {!fullText ? "read more" : "   show less"}
          </button>
        </p>
        <div className="center">
          <button className="not-interested" onClick={() => removeTour(id)}>
            Not interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;

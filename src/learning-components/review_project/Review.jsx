import React, { useEffect, useState } from "react";
import "./Review.css";
import Reviews from "./reviewsData";
import { FaChevronLeft, FaChevronRight, FaRandom } from "react-icons/fa";
const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewList = Reviews;
  const [currentReview, setCurrentReview] = useState(reviewList[currentIndex]);

  useEffect(() => {
    setCurrentReview(reviewList[currentIndex]);
  }, [currentIndex]);

  const handleNextReview = () => {
    let newIndex = currentIndex;
    if (currentIndex == reviewList.length - 1) {
      newIndex = -1;
    }

    newIndex += 1;

    setCurrentIndex(newIndex);
  };

  const handlePreviousReview = () => {
    let newIndex = currentIndex;
    if (currentIndex == 0) {
      newIndex = reviewList.length;
    }

    newIndex -= 1;

    setCurrentIndex(newIndex);
  };

  const handleRandomReview = () => {
    let newIndex = Math.floor(Math.random() * reviewList.length);

    if (newIndex == currentIndex) {
      handleNextReview();
      return;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="body-component body-restrict review">
      <h2 className="title">Reviews</h2>
      <div className="box title">
        <div className="image-container">
          <img
            className="image"
            src={currentReview.image}
            alt={currentReview.name}
          />
        </div>
        <h2>{currentReview.name}</h2>
        <h4>{currentReview.job}</h4>

        <p>{currentReview.text}</p>

        <button className="button-as-text handle-buttons">
          <FaChevronLeft onClick={handlePreviousReview} />
        </button>

        <button
          className="button-as-text handle-buttons"
          onClick={handleNextReview}
        >
          <FaChevronRight />
        </button>
        <div>
          <button
            className="button-as-text handle-buttons"
            onClick={handleRandomReview}
          >
            <FaRandom />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;

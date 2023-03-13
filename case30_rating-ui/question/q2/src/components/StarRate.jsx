import React from "react";
import "./StarRate.scss";
import EmptyStar from "../../assets/star-empty.svg";
import HalfStar from "../../assets/star-half.svg";
import FullStar from "../../assets/star-full.svg";
import Reset from "../../assets/reset.svg";

// 별의 갯수 = Score
const MAX_SCORE = 5;

export const StarRate = ({ onChange, score }) => {
  // Write your solution here
  return (
    <div className="star-container">
      {[...Array(MAX_SCORE)].map((star, index) => {
        return (
          <button key={index} onClick={() => onChange(index + 1)}>
            <EmptyStar />
          </button>
        );
      })}
      <Reset />
    </div>
  );
};

import React, { useState } from "react";
import "./StarRate.scss";
import EmptyStar from "../../assets/star-empty.svg";
import HalfStar from "../../assets/star-half.svg";
import FullStar from "../../assets/star-full.svg";
import Reset from "../../assets/reset.svg";

// 별의 갯수 = Score
const MAX_SCORE = 5;

export const StarRate = ({ onChange, score }) => {
  // Write your solution here
  const [displayScore, setDisplayScore] = useState(score);

  const calculateScore = (e) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const scale = width / MAX_SCORE / 2;
    return (Math.floor(x / scale) + 1) / 2;
  };

  const handleMouseMove = (e) => {
    setDisplayScore(calculateScore(e));
  };

  const resetScore = () => {
    onChange(0);
    setDisplayScore(0);
  };

  return (
    <div className="star-container">
      <div
        className="stars"
        onClick={() => onChange(displayScore)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setDisplayScore(score)}
      >
        {[...Array(MAX_SCORE)].map((_, index) => (
          <Star key={index} score={displayScore} index={index} />
        ))}
      </div>
      <Reset className="reset" onClick={resetScore} />
    </div>
  );
};

const Star = ({ score, index }) => {
  if (score > index) {
    if (score - index === 0.5) {
      return <HalfStar />;
    } else {
      return <FullStar />;
    }
  } else {
    return <EmptyStar />;
  }
};

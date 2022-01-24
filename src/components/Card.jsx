import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";

const Card = ({
  mostPopular,
  numOfTubes,
  savings,
  numOfMonths,
  saved,
  isBestResult,
  currentPrice,
  priceBefore,
  isActive,
}) => {
  return (
    <div className={`${isActive && `wrapper`}`}>
      <div className={`card-container ${isActive && `active`}`}>
        <div>
          {mostPopular && (
            <div className="most-popular">
              <BsStarFill />
              <h2>Most Popular</h2>
              <BsStarFill />
            </div>
          )}
          <h2>1 Months Pack (4 tubes)</h2>
          <p>Savings: ₹200</p>
          <div>
            <h4>38% Saved</h4>
            {isBestResult && <h4>Best Results</h4>}
          </div>
        </div>
        <div className="price-container">
          <h1>₹595</h1>
          <h1>₹795</h1>
        </div>
      </div>
      {isActive && <FiCheck />}
    </div>
  );
};

export default Card;

import React, { useState } from "react";
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
  const [toggleCard, setToggleCard] = useState(false);

  const handleToggle = () => {
    setToggleCard((prev) => !prev);
  };
  return (
    <div className={`${toggleCard && `wrapper`}`} onClick={handleToggle}>
      <div className={`card-container ${toggleCard && `active`}`}>
        <div className="left-container">
          {mostPopular && (
            <div className="most-popular">
              <BsStarFill className="icon" />
              <p>Most Popular</p>
              <BsStarFill className="icon" />
            </div>
          )}
          <h2>
            {numOfMonths} Months Pack ({numOfTubes} tubes)
          </h2>
          <p>Savings: ₹{savings}</p>
          <div className="savings-container">
            <h4>{saved}% Saved</h4>
            {isBestResult && <h4 id="best-result">Best Results</h4>}
          </div>
        </div>
        <div className="right-container">
          <p>₹{currentPrice}</p>
          <p id="price-before">₹{priceBefore}</p>
        </div>
      </div>
      {toggleCard && <FiCheck className="icon" />}
    </div>
  );
};

export default Card;

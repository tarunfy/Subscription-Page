import React, { useState } from "react";
import Navbar from "./components/Navbar";
import heroImg from "./media/Hero.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./components/Card";

function App() {
  const [toggleCard, setToggleCard] = useState(false);
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <img src={heroImg} alt="hero-img" id="hero-img" />
        <h1 className="title">Everyday rinse and reload</h1>
        <p className="subtitle">
          Achieve your dream skin goal with this complete package of skincare
          produts that will rejuvenate your day.
        </p>
      </div>
      <div className="review-container">
        <div className="rating">
          <BsStarFill className="rating-icon" />
          <BsStarFill className="rating-icon" />
          <BsStarFill className="rating-icon" />
          <BsStarFill className="rating-icon" />
          <BsStarHalf className="rating-icon" />
        </div>
        <h6>4.5</h6>
        <div className="read-reviews-container">
          <p>Click to read reviews</p>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="price">
        <h1>₹899</h1>
        <h1 className="line-through">₹1299</h1>
      </div>
      <Card
        mostPopular
        numOfTubes="4"
        savings="200"
        numOfMonths="1"
        saved="38"
        isBestResult
        currentPrice="595"
        priceBefore="795"
        isActive={false}
      />
      <Card
        numOfTubes="12"
        savings="100"
        numOfMonths="3"
        saved="12"
        currentPrice="899"
        priceBefore="999"
        isActive={true}
      />
    </>
  );
}

export default App;

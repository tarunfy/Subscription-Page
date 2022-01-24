import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <GiHamburgerMenu className="icon" />
      <AiOutlineShoppingCart className="icon" />
    </div>
  );
};

export default Navbar;

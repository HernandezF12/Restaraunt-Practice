import "./navbar.css";
import React from "react";
import Logo from './images/AHG-Logo.png';

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <Logo />
      </div>
    </div>
  );
}

export default Navbar;

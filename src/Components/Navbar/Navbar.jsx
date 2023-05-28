import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="title flexC">
      <i className="fa-brands fa-skype"></i>
        <h1 style={{marginLeft:"-25px"}}>Shivma Gaur</h1>
      </div>
      <div className="menu flexC">
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
      </div>
      <div className="logo flexC">
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
};

export default Navbar;

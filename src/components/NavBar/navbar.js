import React from "react";
import "./navbar.css";
import logo from "../../assets/assets/logo.png";
import contactImg from "../../assets/assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <list className="desktopMenuListItem">Home</list>
        <list className="desktopMenuListItem">About</list>
        <list className="desktopMenuListItem">Portfolio</list>
        <list className="desktopMenuListItem">Clients</list>
      </div>
      <button className="desktopMenuBtn">
        <img className="desktopMenuImg" src={contactImg} alt="" />Conatct Me</button>
    </nav>
  );
};

export default Navbar;

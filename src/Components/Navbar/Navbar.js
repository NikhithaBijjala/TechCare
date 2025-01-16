import React from "react";
import Logo from "../../assets/TestLogo.png";
import Profile from "../../assets/profile-picture2.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CiSettings } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoHomeOutline, IoPersonSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRegMessage } from "react-icons/fa6";
import { MdCreditCard } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <div className="iconContainer">
          <IoHomeOutline />
          <Link to="/home" className="smalltext">Overview</Link>
        </div>
        <div className="iconContainer">
          <IoPersonSharp />
          <Link to="/about" className="smalltext">Patients</Link>
        </div>
        <div className="iconContainer">
          <SlCalender />
          <Link to="/services" className="smalltext">Schedule</Link>
        </div>
        <div className="iconContainer">
          <FaRegMessage />
          <Link to="/contact" className="smalltext">Message</Link>
        </div>
        <div className="iconContainer">
          <MdCreditCard />
          <Link to="/contact" className="smalltext">Transactions</Link>
        </div>
      </div>
      <div className="ProfileSection">
        <div className="PictureName">
          <div>
            <img src={Profile} alt="Profile" />
          </div>

          <div className="profiletext">
            <p className="smalltext">Dr.Jose Simmons</p>
            <p className="smalltext">Genral Practitioner</p>
          </div>
        </div>
        <div className="verticalLine"></div>
        <div className="icons">
          <CiSettings />
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

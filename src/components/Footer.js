import React from "react";
import "./Footer.css";
import { FaCity } from "react-icons/fa";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="top-text footer-end">
      Thanks for visiting my GymShark website
      <div className="footer-mid">
        <div className="box">
          <div className=" end-text">GymShark by Yash</div>
        </div>
        <div>
          <a href="#home" className="box p-text mover">
            <AiOutlineArrowUp className="up-logo"></AiOutlineArrowUp>
          </a>
        </div>
        <div className="box end-text">
          <div>
            <FaCity className=" city-logo"></FaCity>
          </div>
          <div>Noida, India</div>
        </div>
      </div>
      <hr></hr>
      <div className="end-text">Designed with ❤️ by Yash Sachan </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img
          src={Logo}
          style={{
            width: "30px",
            height: "30px",
            margin: "0 20px",
          }}
        ></img>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #ff2525",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </a>
      </Stack>
    </div>
  );
};

export default Navbar;

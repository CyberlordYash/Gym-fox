import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const ExerciseDetail = () => {
  return (
    <Stack>
      <Link to={"/"}>
        <img src={Logo}></img>
      </Link>
    </Stack>
  );
};

export default ExerciseDetail;

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/gym.svg";
const HeroBanner = () => {
  return (
    <div className="hero">
      <div>
        <Typography color="#ff2625" fontWeight="600" fontSize="27px">
          Get Fit
        </Typography>
        <Typography
          fontWeight="700"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          it's time to get
          <br /> Stronger
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={3}>
          Check out the most effective Exercises
        </Typography>
        <button className="home__button">EXPLORE EXERCISES</button>
        <Typography
          fontWeight={600}
          fontSize="250px"
          color="#ff2625"
          sx={{
            opacity: 0.1,
            display: { lg: "block", xs: "none" },
          }}
        >
          Exercise
        </Typography>
        <div>
          <img src={HeroBannerImage} className="hero-banner-img"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

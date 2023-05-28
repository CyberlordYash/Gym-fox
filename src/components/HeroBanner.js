import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/p.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "112px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="realative"
      p="20px"
    >
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
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2635",
          backgroundImage: "linear-gradient(to right, red ,red,red, yellow)",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        EXPLORE EXERCISES
      </Button>
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

      <img src={HeroBannerImage} className="hero-banner-img"></img>
    </Box>
  );
};

export default HeroBanner;

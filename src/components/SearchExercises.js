import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise you <br />
        Should know
      </Typography>
      <Box position="realative" mb="720px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "5px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "white",
            textTransform: "uppercase",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "12px" },
            height: "56px",
            position: "absolute",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;

import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Lottie from "lottie-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Loading from "./assets/loading.json";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="loading">
          <Lottie animationData={Loading} className="lottie"></Lottie>
        </div>
      ) : (
        <>
          <Navbar />{" "}
          <Box width="100%">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/exercise/:id"
                element={<ExerciseDetail></ExerciseDetail>}
              ></Route>
            </Routes>
            <Footer></Footer>
          </Box>
        </>
      )}
    </div>
  );
};

export default App;

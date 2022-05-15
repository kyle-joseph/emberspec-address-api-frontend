import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Barangays from "./geolevel/barangays";
import Municipalities from "./geolevel/municipalities";
import Provinces from "./geolevel/provinces";
import Regions from "./geolevel/regions";
import Home from "./home/home";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="main-body container mx-auto">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/regions" element={<Regions />} />
          <Route exact path="/provinces" element={<Provinces />} />
          <Route exact path="/municipalities" element={<Municipalities />} />
          <Route exact path="/barangays" element={<Barangays />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;

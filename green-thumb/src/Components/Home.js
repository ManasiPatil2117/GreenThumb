import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Collections from "./Collections";
import "../Styles/Animation.css";

export default function Home() {
  const navigate = useNavigate();
  const navigateCollections = () => {
    navigate("/collections");
  };
  return (
    <>
      <div className="container mx-auto mt-5 " align="center">
        <span className="Animation">Green Thumb</span>
        <div className="fs-3 fw-bolder text-white">
          Where you can buy any plant and we will deliver it straight to your
          door
        </div>
        <button className="btn1 mt-5" onClick={navigateCollections}>
          Explore
        </button>
        <Routes>
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </div>
    </>
  );
}

import React from "react";
import {Route, Routes, useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const navigateComponent1= ()=>{
    navigate('/collections');
  };
  return (
    <>
      <div className="container mx-auto mt-5 " align="center">
        <span className="Animation">Green Thumb</span>
        <div className="fs-3 fw-bolder">
          Where you can buy any plant and we will deliver it straight to your
          door
        </div>
        <button className="btn mt-5" onClick={navigateComponent1}>Explore</button>
        <Routes>
            <Route path="/collections" element={<component1/>}/>
        </Routes>
      </div>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "../src/Styles/Animation.css";
import About from "./Components/About";
import plant from "./Components/component1";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
    </BrowserRouter>
    <h1>{plant()}</h1>
    </>
  );
}

export default App;

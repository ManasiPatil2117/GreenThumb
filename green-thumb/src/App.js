import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "../src/Styles/Animation.css";
import About from "./Components/About";
import Collections from "./Components/Collections";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

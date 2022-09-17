import bg2 from "./images/bg2.jpg";
import Navbar from "./Components/Navbar";
function App() {
  const w="100%";
  const h="745px";
  return (
    <div className="App">
     <img className="img-responsive" src={bg2} alt="Could not load" width={w} height={h}/>
    <Navbar/>
    </div>
  );
}

export default App;

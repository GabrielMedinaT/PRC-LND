import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import { useState } from "react";
import Left from "./Components/Left";
import ISS from "./Components/ISS";
import Mas from "./Components/Mas";
import Footer from "./Components/Footer";
import SolarSystem from "./Components/SolarSystem";
import Registro from "./Components/Registro";
import Hubble from "./Components/Hubble";
function App() {
  const [render, setRender] = useState("home");

  console.log(render);
  return (
    <>
      <NavBar render={render} setRender={setRender} />
      <div className="App">
        <Left render={render} setRender={setRender} />
        <SolarSystem />
        {render === "About" && <About />}
        {render === "iss" && <ISS />}
        {render === "mas" && <Mas />}
        {render === "registro" && <Registro />}
        {render === "hubble" && <Hubble />}
      </div>
      <Footer />
    </>
  );
}

export default App;

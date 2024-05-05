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
import Webb from "./Components/Webb";
import GPS from "./Components/GPS";
import Galileo from "./Components/Galileo";
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
        {render === "webb" && <Webb />}
        {render === "gps" && <GPS />}
        {render === "galileo" && <Galileo />}
      </div>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import { useState } from "react";
import * as Components from "./Components/Components";

function App() {
  const [render, setRender] = useState<string>("");

  console.log(render);
  return (
    <>
      <Components.NavBar render={render} setRender={setRender} />
      <div className="App">
        <Components.Left setRender={setRender} />
        <Components.SolarSystem />
        {render === "About" && <Components.About />}
        {render === "iss" && <Components.Iss />}
        {render === "mas" && <Components.Mas />}
        {render === "registro" && <Components.Registro />}
        {render === "hubble" && <Components.Hubble />}
        {render === "webb" && <Components.Webb />}
        {render === "gps" && <Components.Gps />}
        {render === "galileo" && <Components.Galileo />}
        {render === "glonass" && <Components.Glonass />}
        {render === "beidou" && <Components.Beidou />}
        {render === "apophis" && <Components.Apophis />}
      </div>
      <Components.Footer />
    </>
  );
}

export default App;

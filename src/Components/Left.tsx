import React from "react";
import "./Left.css";
import PropTypes from "prop-types";

interface LeftProps {
  setRender: (value: string) => void;
}

const Left: React.FC<LeftProps> = ({ setRender }) => {
  const changeRender = (value: string) => {
    setRender(value);
  };

  return (
    <div className="Left">
      <h2>Satélites</h2>
      <ul className="Satelites">
        <li onClick={() => changeRender("iss")}>ISS</li>
        <li onClick={() => changeRender("hubble")}>Hubble</li>
        <li onClick={() => changeRender("webb")}>James Webb</li>
        <li onClick={() => changeRender("gps")}>GPS</li>
        <li onClick={() => changeRender("glonass")}>GLONASS</li>
        <li onClick={() => changeRender("beidou")}>Beidou</li>
        <li onClick={() => changeRender("mas")}>Photo of the Day</li>
      </ul>
      <h2>Asteroides</h2>
      <ul className="Asteroides">
        <li onClick={() => changeRender("apophis")}>Apophis</li>
        <li onClick={() => changeRender("bennu")}>Bennu</li>
        <li onClick={() => changeRender("ryugu")}>Ryugu</li>
        <li onClick={() => changeRender("didymos")}>Didymos</li>
        <li onClick={() => changeRender("chicxulub")}>Chicxulub</li>
        <li onClick={() => changeRender("chelyabinsk")}>Chelyabinsk</li>
        <li onClick={() => changeRender("tunguska")}>Tunguska</li>
      </ul>
    </div>
  );
};

Left.propTypes = {
  setRender: PropTypes.func.isRequired,
};

export default Left;

import "./Left.css";
import PropTypes from "prop-types";

const Left = ({ setRender }) => {
  Left.propTypes = {
    setRender: PropTypes.func.isRequired,
  };

  const changeRender = (value) => {
    setRender(value);
  };

  return (
    <div className="Left">
      <ul className="Satelites">
        <h2>Satélites</h2>
        <li onClick={() => changeRender("iss")}>ISS</li>
        <li onClick={() => changeRender("hubble")}>Hubble</li>
        <li onClick={() => changeRender("webb")}>James Webb</li>
        <li onClick={() => changeRender("gps")}>GPS</li>
        <li onClick={() => changeRender("glonass")}>GLONASS</li>
        <li onClick={() => changeRender("beidou")}>Beidou</li>
        <li onClick={() => changeRender("mas")}>Photo of the Day</li>
      </ul>
      <ul className="Asteroides">
        <h2>Asteroides</h2>
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

export default Left;

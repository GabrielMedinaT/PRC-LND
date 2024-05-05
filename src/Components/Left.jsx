import "./Left.css";

const Left = ({ setRender }) => {
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
        <li onClick={() => changeRender("galileo")} >Galileo</li>
        <li>GLONASS</li>
        <li>Beidou</li>
        <li onClick={() => changeRender("mas")}>Photo of the Day</li>
      </ul>
      <ul className="Asteroides">
        <h2>Asteroides</h2>
        <li>Apophis</li>
        <li>Bennu</li>
        <li>Ryugu</li>
        <li>Didymos</li>
        <li>Chicxulub</li>
        <li>Chelyabinsk</li>
        <li>Tunguska</li>
      </ul>
    </div>
  );
};

export default Left;

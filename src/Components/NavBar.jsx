import "./NavBar.css";
import { useState } from "react";
import PropTypes from "prop-types";

const NavBar = ({ render, setRender }) => {
  NavBar.propTypes = {
    render: PropTypes.string.isRequired,
    setRender: PropTypes.func.isRequired,
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const changeRender = (value) => {
    setRender(value);
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un elemento
  };
  console.log(menuOpen);

  return (
    <div className="NavBar">
      <div className="logo"></div>
      <div className="menu">
        <ul className={`menulist${menuOpen ? "active" : ""}`}>
          <li onClick={() => changeRender("Home")}>Home</li>
          <li onClick={() => changeRender("About")}>About</li>
          <li onClick={() => changeRender("Contact")}>Contact</li>
          <li onClick={() => changeRender("registro")}>Registro</li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default NavBar;

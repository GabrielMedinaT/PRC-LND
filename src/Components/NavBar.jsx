import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({ setRender }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const changeRender = (value) => {
    setRender(value);
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un elemento
  };

  return (
    <div className="NavBar">
      <div className="logo"></div>
      <div className="menu">
        <ul className={`menulist ${menuOpen ? 'active' : ''}`}>
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

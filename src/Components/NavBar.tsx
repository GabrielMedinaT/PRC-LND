import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";

interface NavBarProps {
  render: string;
  setRender: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ render, setRender }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [satellitePage, setSatellitePage] = useState<boolean>(false);

  useEffect(() => {
    const handleSatellitePage = () => {
      const satellitePages = [
        "iss",
        "hubble",
        "webb",
        "gps",
        "glonass",
        "beidou",
      ];
      setSatellitePage(satellitePages.includes(render));
    };

    handleSatellitePage();
  }, [render]);

  const changeRender = (value: string) => {
    setRender(value);
    setMenuOpen(false);
  };

  return (
    <div className="NavBar">
      <div className="logo"></div>
      <h1>{satellitePage ? "Satélites" : "Asteroides"}</h1>
      <div className="menu">
        <ul className={`menulist${menuOpen ? " active" : ""}`}>
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

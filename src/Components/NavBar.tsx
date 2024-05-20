import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  render: string;
  setRender: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ render, setRender }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [satellitePage, setSatellitePage] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>("en"); // Inicializa el idioma como "en" por defecto

  const changeLanguage = () => {
    console.log("Changing language");
    const newLanguage = language === "en" ? "es" : "en"; // Alterna entre "en" y "es"
    i18n.changeLanguage(newLanguage); // Cambia el idioma
    setLanguage(newLanguage); // Actualiza el estado del idioma
  };

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

  console.log("Current language:", i18n.language);
  console.log("Translations:", t);

  const changeRender = (value: string) => {
    setRender(value);
    setMenuOpen(false);
  };

  return (
    <div className="NavBar">
      <div className="logo"></div>
      <h1>{satellitePage ? "Satélites" : "Asteroides"}</h1>
      <button onClick={changeLanguage}>{t("button")}</button>
      <div className="menu">
        <ul className={`menulist${menuOpen ? " active" : ""}`}>
          <li onClick={() => changeRender("Home")}>{t("Home")}</li>
          <li onClick={() => changeRender("About")}>{t("Acerca")}</li>
          <li onClick={() => changeRender("Contact")}>{t("Contact")}</li>
          <li onClick={() => changeRender("registro")}>{t("Registro")}</li>
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

import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>© 2021 NearEarth</p>
      <p>
        Hecho por{" "}
        <a
          href="https://gabrielmedinatorres.com/"
          target="_blank"
          rel="noopener"
        >
          Gabriel
        </a>
      </p>
    </div>
  );
};

export default Footer;

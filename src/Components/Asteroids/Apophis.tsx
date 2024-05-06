import React from "react";
import "../Satelites/satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Apophis = () => {
  const fadeImages = [
    {
      url: "https://images.twnmm.com/c55i45ef3o2a/4rm14oAV1AQjXWts91W1vs/0e560117279ef99c28e3225932ba4e5c/Apophis-Earth-flyby-2029.jpg",
      caption: "First Slide",
    },
    {
      url: "https://i.ytimg.com/vi/eOTH5SBVU00/maxresdefault.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/51e5fbd261f9421af9989a62869f0b84.jpg",
      caption: "Third Slide",
    },
  ];
  return (
    <div className="satelite">
      <div className="fotoSatelite">
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index}>
                <img
                  className="slide-image"
                  src={fadeImage.url}
                  alt={fadeImage.caption}
                />
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <div className="desc">
        <h1>Apophis</h1>
        <p>
          El asteroide Apofis (anteriormente conocido como 2004 MN4) es un
          asteroide Atón con una órbita cercana a la de la Tierra. Inicialmente,
          se estimó una probabilidad relativamente alta de colisión con la
          Tierra en 2029, pero observaciones adicionales indicaron que esto era
          poco probable. Aunque existía la posibilidad de que pasara por una
          cerradura gravitacional en 2029, nuevas observaciones redujeron esta
          probabilidad. En agosto de 2006, fue rebajado al nivel 0 de la escala
          de Turín. Las estimaciones posteriores sugieren una probabilidad
          extremadamente baja de impacto en 2036 o 2037, y se descartó la
          posibilidad de colisión después de observaciones en enero de 2013 por
          el Laboratorio de Propulsión a Reacción de la NASA.
        </p>
      </div>
    </div>
  );
};

export default Apophis;

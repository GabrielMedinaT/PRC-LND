import React from "react";
import "./satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Galileo = () => {
  const fadeImages = [
    {
      url: "https://actualidadaeroespacial.com/wp-content/uploads/2022/03/Galileo-Satellite-090322.jpg",
      caption: "First Slide",
    },
    {
      url: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/12/galileo_satellites2/16583150-1-eng-GB/Galileo_satellites_pillars.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://www.tecnologiaeinnovacion.defensa.gob.es/Lists/MaquetacionETID/CONT_tecnologias/Sistema%20Galileo.png",
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
        <h1>Galileo</h1>
        <p>
          Galileo es el sistema europeo de radionavegación y posicionamiento por
          satélite desarrollado por la Agencia Espacial Europea (ESA) y
          financiado por la Comisión Europea, estando operado por la Agencia de
          la Unión Europea para el Programa Espacial (EUSPA). Este sistema dota
          a la Unión Europea de una tecnología única e independiente del GPS
          estadounidense y del GLONASS ruso, alcanzando uno de los objetivos de
          la «autonomía estratégica europea».Al contrario de estos dos, es de
          creación, gestión y uso civil. El sistema se puso en marcha el 15 de
          diciembre del 2016 con alrededor de la mitad de los satélites que lo
          componen, y en 2016 se esperaba completarlo para 2020 .Actualmente
          Galileo consta de 23 satélites operativos y 5 no disponibles o en
          desuso. Galileo está apoyado por el sistema europeo EGNOS, también
          desarrollado por la ESA.
        </p>
      </div>
    </div>
  );
};

export default Galileo;

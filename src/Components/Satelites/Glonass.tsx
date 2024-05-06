import React from "react";
import "./satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Glonass = () => {
  const fadeImages = [
    {
      url: "https://s1.elespanol.com/2023/08/30/omicrono/defensa-y-espacio/790681530_235687607_1706x960.jpg",
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
        <h1>GLONASS</h1>
        <p>
          GLONASS (acrónimo en ruso: ГЛОНАСС, ГЛОба́льная НАвигацио́нная
          Спу́тниковая Систе́ма tr.: Global naya Navigatsionnaya Sputnikovaya
          Sistema) es un Sistema Global de Navegación por Satélite (GNSS)
          desarrollado por la Unión Soviética, siendo hoy administrado por la
          Federación de Rusia y que constituye el homólogo del GPS
          estadounidense y del Galileo europeo. Consta de una constelación de 31
          satélites (24 activos, 3 satélites de repuesto, 2 en mantenimiento,
          uno en servicio y otro en pruebas) situados en tres planos orbitales
          con 8 satélites cada uno y siguiendo una órbita inclinada de 64.8° de
          inclinación con un radio de 25 510 km. La constelación de GLONASS se
          mueve en órbita alrededor de la Tierra con una altitud de 19.100 km
          (diecinueve mil cien kilómetros) algo más bajo que el GPS (20.200 km)
          y tarda aproximadamente 11 horas y 15 minutos en completar una órbita.
          El sistema está a cargo del Ministerio de Defensa de la Federación de
          Rusia y los satélites se han lanzado desde Baikonur, en Kazajistán.
        </p>
      </div>
    </div>
  );
};

export default Glonass;

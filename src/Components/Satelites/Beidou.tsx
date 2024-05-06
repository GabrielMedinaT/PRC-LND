import React from "react";
import "./satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Slide {
  url: string;
  caption: string;
}

const Beidou: React.FC = () => {
  const fadeImages: Slide[] = [
    {
      url: "https://i.blogs.es/de1a6e/beidou/1366_2000.jpg",
      caption: "First Slide",
    },
    {
      url: "https://www.nasaspaceflight.com/wp-content/uploads/2018/01/2018-01-11-160755.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://navalpost.com/wp-content/uploads/2021/05/BeiDou-Navigation-Satellite-System-2-1024x576.jpg",
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
        <h1>Beidou</h1>
        <p>
          El sistema de navegación por satélite BeiDou (BDS) es un proyecto
          chino compuesto por dos generaciones distintas de constelaciones
          satelitales. La primera generación, conocida como BeiDou-1, operó
          desde el año 2000 hasta finales de 2012, brindando servicios de
          navegación limitados principalmente en China y regiones vecinas. La
          segunda generación, BeiDou-2, comenzó a funcionar en 2011 con una
          constelación inicial de 10 satélites y proporciona servicios en la
          región de Asia-Pacífico desde 2012. China también está desarrollando
          la tercera generación, BeiDou-3, con el objetivo de alcanzar cobertura
          global con una precisión esperada superior a la de otros sistemas de
          navegación por satélite. Este sistema, que se espera complete su
          despliegue en 2020, tiene como objetivo proporcionar una alternativa
          al GPS de Estados Unidos, el GLONASS ruso y el sistema europeo
          Galileo. El sistema BeiDou no solo tiene implicaciones tecnológicas,
          sino también económicas, generando importantes ingresos para diversas
          empresas chinas. En diciembre de 2018, BeiDou comenzó a ofrecer
          servicios globales, lo que marca un hito significativo en su
          desarrollo y despliegue. La constelación BeiDou se erige como una
          alternativa en el campo de la navegación por satélite, prometiendo
          precisión milimétrica y una competencia viable en el mercado global de
          servicios de posicionamiento.
        </p>
      </div>
    </div>
  );
};

export default Beidou;

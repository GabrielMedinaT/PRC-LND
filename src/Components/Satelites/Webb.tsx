import React from "react";
import "./satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Webb = () => {
  const fadeImages = [
    {
      url: "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/el-lanzamiento-del-telescopio-espacial-james-webb-se-puede-retrasar-a-noviembre/9071659-1-esl-MX/El-lanzamiento-del-telescopio-espacial-James-Webb-se-puede-retrasar-a-noviembre.jpg",
      caption: "First Slide",
    },
    {
      url: "https://www.ngenespanol.com/wp-content/uploads/2023/05/telescopio-espacial-james-webb-historia-de-su-origen-y-nombre.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://utec.edu.pe/sites/default/files/styles/blog_full/public/blog/nasa-james-webb-foto.jpg",
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
        <h1>James Webb</h1>
        <p>
          El telescopio espacial James Webb (en inglés, James Webb Space
          Telescope (JWST)) es un observatorio espacial desarrollado a través de
          la colaboración de 14 países, construido y operado conjuntamente por
          la Agencia Espacial Europea, la Agencia Espacial Canadiense y la NASA
          para sustituir los telescopios Hubble y Spitzer.El telescopio Webb
          ofrece una resolución y sensibilidad sin precedentes, y permite una
          amplia gama de investigaciones en los campos de la astronomía y la
          cosmología .Uno de sus principales objetivos es observar algunos de
          los eventos y objetos más distantes del universo, como la formación de
          las primeras galaxias. Este tipo de objetivos están fuera del alcance
          de los instrumentos terrestres y espaciales actuales. Entre sus
          objetivos están incluidos estudiar la formación de estrellas y
          planetas y obtener imágenes directas de exoplanetas y novas.
        </p>
      </div>
    </div>
  );
};

export default Webb;

import "./satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const GPS = () => {
  const fadeImages = [
    {
      url: "https://www.neoteo.com/wp-content/uploads/2006/03/GPSsatelites.jpg",
      caption: "First Slide",
    },
    {
      url: "https://i.blogs.es/e328e3/satelite-gps/1366_2000.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://astronoo.com/images/satellites/gps.jpg",
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
                <img style={{ width: "100%" }} src={fadeImage.url} />
                {/* <h2>{fadeImage.caption}</h2> */}
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <div className="desc">
        <h1>GPS</h1>
        <p>
          El Sistema de Posicionamiento Global (GPS; en inglés: Global
          Positioning System), originalmente Navstar GPS, es un sistema que
          permite a un dispositivo receptor localizar su propia posición sobre
          la Tierra con una precisión de hasta centímetros (si se utiliza GPS
          diferencial), aunque lo común son unos pocos metros. El sistema fue
          desarrollado, instalado y empleado por el Departamento de Defensa de
          Estados Unidos, y actualmente es propiedad de la Fuerza Espacial de
          los Estados Unidos. Para determinar su posición, un usuario utiliza
          cuatro o más satélites y utiliza la trilateración. Es el homólogo del
          GLONASS ruso y del Galileo europeo.
        </p>
      </div>
    </div>
  );
};

export default GPS;

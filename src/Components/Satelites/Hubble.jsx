import "./satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Hubble = () => {
  const fadeImages = [
    {
      url: "https://estaticos-cdn.prensaiberica.es/clip/3eeb35b7-e60c-4274-8a3a-46c5c3dce3ba_16-9-aspect-ratio_default_0.jpg",
      caption: "First Slide",
    },
    {
      url: "https://www.uncuyo.edu.ar/ices/cache/hubble_546_966.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://www.elsoldemexico.com.mx/doble-via/ciencia/drk6gy-telescopio-espacial-hubble.jpg/ALTERNATES/LANDSCAPE_1140/Telescopio%20Espacial%20Hubble.jpg",
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
        <h1>Hubble</h1>
        <p>
          El Telescopio Espacial Hubble es un telescopio de óptica adaptativa
          ubicado en órbita alrededor de la Tierra. Fue lanzado por la NASA en
          1990 y es uno de los instrumentos más importantes en la historia de la
          astronomía. Su principal objetivo es observar el universo en
          longitudes de onda desde el ultravioleta hasta el infrarrojo cercano.
          Gracias a su posición en el espacio, el Hubble puede evitar la
          distorsión causada por la atmósfera terrestre, permitiendo imágenes de
          una claridad excepcional. Ha proporcionado una amplia gama de
          descubrimientos, incluidos datos sobre la expansión del universo, la
          formación de estrellas y galaxias, así como imágenes detalladas de
          objetos celestes dentro y fuera de nuestra galaxia.{" "}
          <a
            href="http://wsn.spaceflight.esa.int/Hubble/index_portal.php"
            target="_blank"
          >
            aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hubble;

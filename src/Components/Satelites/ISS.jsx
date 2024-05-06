import "./satelites.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ISS = () => {
  const fadeImages = [
    {
      url: "https://i.blogs.es/e56019/iss1/450_1000.jpg",
      caption: "First Slide",
    },
    {
      url: "https://actualidadaeroespacial.com/wp-content/uploads/2022/02/Estacion-espacial-ISS-240222.jpg",
      caption: "Second Slide",
    },
    {
      url: "https://c.files.bbci.co.uk/55D2/production/_104407912_iss056e201225.jpg",
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
        <h1>ISS</h1>
        <p>
          La Estación Espacial Internacional (EEI) representa un hito sin
          precedentes en la exploración espacial, siendo un proyecto
          colaborativo entre cinco agencias espaciales líderes: NASA, Roscosmos,
          JAXA, ESA y CSA/ASC. Situada en la órbita terrestre baja, la EEI es un
          laboratorio de investigación en microgravedad que acoge estudios en
          campos tan diversos como la astrobiología, la astronomía y la física.
          Además de ser un centro de investigación, la EEI desempeña un papel
          crucial en la preparación para futuras misiones de larga duración,
          como los viajes a la Luna y Marte. Desde su lanzamiento en 1998, ha
          albergado de forma continua a astronautas de diversas nacionalidades,
          promoviendo la cooperación internacional y la exploración espacial.
          Con una tripulación de hasta seis miembros, la EEI ha acogido a
          visitantes de 19 países y se ha convertido en un símbolo emblemático
          del ingenio humano en el espacio, operando con la expectativa de
          continuar su misión hasta al menos el año 2030. Seguimiento a tiempo
          real{" "}
          <a
            href="http://wsn.spaceflight.esa.int/iss/index_portal.php"
            target="_blank"
          >
            aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default ISS;

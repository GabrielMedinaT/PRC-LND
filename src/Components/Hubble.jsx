import "./Hubble.css";

const Hubble = () => {
  return (
    <div className="Hubble">
      <div className="fotoHubble"></div>
      <div className="descHubble">
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

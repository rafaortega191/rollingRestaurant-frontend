/*import { Button } from "react-bootstrap";
import error from "../../assets/fondoError";*/
import "./ErrorPage.css";
const Error404 = () => {
  return (
    <section className="section">
      <img src="{error}" className="Imagen del fondo" alt="Error 404" />
      <div>
        <h2 class="display-1">¡Ups!</h2>
        No encontramos lo que estás buscando
        <button variant="btn btn-warning mt-3 ">
          Volver a la pagina principal
        </button>
      </div>
    </section>
  );
};

export default Error404;

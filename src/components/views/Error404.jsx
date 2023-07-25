import { Form, Button, Container, Card } from "react-bootstrap";
import error from "../../assets/fondoError.jpg";
import "./errorPage.css";

const Error404 = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center p-0"
      style={{
        backgroundImage: `url(${error})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="text-white text-center">
        <h2 className="titulo_1 display-1">¡Ups!</h2>
        <p className="texto_general_1">No encontramos lo que estás buscando</p>
        <Button variant="warning mt-3" href="/home">
          Volver a la página principal
        </Button>
      </div>
    </Container>
  );
};

export default Error404;

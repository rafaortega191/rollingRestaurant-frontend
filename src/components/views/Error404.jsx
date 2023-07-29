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
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="text-black text-center">
        <h1 className="titulo-error">¡Ups!</h1>
        <p className="texto-general-error">
          No encontramos lo que estás buscando
        </p>
        <Button className="btn-error " href="/">
          Volver a la página principal
        </Button>
      </div>
    </Container>
  );
};

export default Error404;

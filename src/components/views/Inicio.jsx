import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { consultaListaProductos } from "../helpers/queries";
import { useEffect, useState } from "react";
import CustomNav from "../common/CustomNav";
import Footer from "../common/Footer";
import "./inicio.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Inicio = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultaListaProductos().then((respuesta) => {
      setProductos(respuesta);
      setUsuarioLogeado({
        email: "prueba2@gmail.com",
        password: "Prueba_123!",
        nonbreusuario: "Euge",
        es_admin: true,
      });
    });
  }, []);

  return (
    <div>
      <CustomNav
        usuarioLogeado={usuarioLogeado}
        setUsuarioLogeado={setUsuarioLogeado}
      ></CustomNav>
      <section>
        <Carousel fade className="contenedor-carrusel">
          <Carousel.Item interval={1500}>
            <img
              src="https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg"
              className="rounded imagenes-carrusel"
              alt="Plato de fideo"
            />
            <Carousel.Caption>
              <h2 className="titulo-carrusel">LAS PASTAS</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              src="https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg"
              className="rounded imagenes-carrusel"
              alt="Fideos amasados"
            />
            <Carousel.Caption>
              <h2 className="titulo-carrusel">MAS RICAS</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              src="https://images.pexels.com/photos/3209101/pexels-photo-3209101.jpeg"
              className="rounded imagenes-carrusel"
              alt="Plato de fideos"
            />
            <Carousel.Caption>
              <h2 className="titulo-carrusel">DE TUCUMAN</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="contenedor-inicio">
        <div className="contenedor-cards-principales">
          <Card style={{ maxWidth: "100%" }} className="cards-principales">
            <Link className="cards-links" href="#menu">
              <img
                src="https://images.pexels.com/photos/6287298/pexels-photo-6287298.jpeg"
                className="imagenes-cards-principales "
                alt="Manos amasando"
              />
              <Card.Body>
                <Card.Title className="titulos-cards-principales">
                  Descubre un Mundo de Sabores Inclusivos
                </Card.Title>
                <Card.Text className="subtitulos-cards-principales">
                  Descubre nuestra diversa carta con opciones sin TACC, veganas
                  y vegetarianas.
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card style={{ maxWidth: "100%" }} className="cards-principales">
            <Link className="cards-links" to="/acercadenosotros">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                className="imagenes-cards-principales"
                alt="Chef preparando un plato"
              />
              <Card.Body>
                <Card.Title className="titulos-cards-principales">
                  Sobre nosotros
                </Card.Title>
                <Card.Text className="subtitulos-cards-principales">
                  Conoce nuestra apasionante historia y el compromiso que nos
                  impulsa a ofrecerte experiencias inolvidables.
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card style={{ maxWidth: "100%" }} className="cards-principales">
            <Link className="cards-links" to="/error404">
              <img
                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg"
                className="imagenes-cards-principales "
                alt="Mesa con platos de comida"
              />
              <Card.Body>
                <Card.Title className="titulos-cards-principales">
                  Explora Lugares Increíbles
                </Card.Title>
                <Card.Text className="subtitulos-cards-principales">
                  Descubre rica historia y una cultura vibrante en cada rincón
                  de esta maravillosa provincia de Tucumán.
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </div>
        <div className="contenedor-productos">
          <h2 className="fw-bold titulo-buscador">TODAS NUESTRAS PASTAS</h2>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=" Busca algun producto"
              maxLength="100"
            />
            <label htmlFor="floatingInput">
              <i className="bi bi-search"></i>Buscar
            </label>
          </div>
        </div>
        <div>
          <h1 className="text-center fw-bold subtitulos-principal">
            Nuestra Seleccion de pastas
          </h1>
          <hr id="menu" className="m-3" />

          <Container className="contenedor-productos-menu">
            {productos.map((producto) => (
              <CardProducto
                key={producto._id}
                user={usuarioLogeado}
                producto={producto}
              ></CardProducto>
            ))}
          </Container>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Inicio;

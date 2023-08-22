import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { consultaListaProductos } from "../helpers/queries";
import { useEffect, useState } from "react";
import CustomNav from "../common/CustomNav";
import Footer from "../common/Footer";
import "./paginaprincipal.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Inicio = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultaListaProductos().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <body className="color-fondo-principal">
      <CustomNav
        usuarioLogeado={usuarioLogeado}
        setUsuarioLogeado={setUsuarioLogeado}
      ></CustomNav>

      <section>
        <Carousel fade className="carousel-principal">
          <Carousel.Item interval={1100}>
            <img
              src="https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imagenes-carousel-principal rounded"
              alt="Imagen 1 - Platos de fideos 1"
            />
            <Carousel.Caption>
              <h2 className="carousel-titulo-principal">LAS PASTAS</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1100}>
            <img
              src="https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg"
              className="imagenes-carousel-principal rounded"
              alt="Imagen 2 - Fideos amasados"
            />
            <Carousel.Caption>
              <h2 className="carousel-titulo-principal ">MAS RICAS</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1300}>
            <img
              src="https://images.pexels.com/photos/3209101/pexels-photo-3209101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imagenes-carousel-principal rounded"
              alt="Imagen 3 - Platos de fideos 2"
            />
            <Carousel.Caption>
              <h2 className="carousel-titulo-principal">DE TUCUMAN</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="section-productos-principal">
        <div className="layout">
          <Card style={{ width: "30rem" }} className="card-principal">
            <img
              src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imagen-dispositivo-chico"
              alt="Imagen 2"
            />
            <Card.Body>
              <Card.Title className="card-titulo-principal">
                Explora Lugares Increíbles
              </Card.Title>
              <Card.Text>
                Descubre exuberantes paisajes, rica historia y una cultura
                vibrante en cada rincón de esta maravillosa provincia de
                Tucumán.
              </Card.Text>
              <Link className="cards-productos-principales" to="/error404">
                Ver mas
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }} className="card-principal">
            <img
              src="https://images.pexels.com/photos/6287298/pexels-photo-6287298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imagen-dispositivo-chico"
              alt="Imagen 2"
            />
            <Card.Body>
              <Card.Title className="card-titulo-principal">
                Nuestros productos sin TACC
              </Card.Title>
              <Card.Text>
                Explora nuestra deliciosa selección de productos sin TACC
                (Trigo, Avena, Cebada, Centeno) para disfrutar de sabores
                increíbles sin preocupaciones.
              </Card.Text>
              <Button
                href="#productos-sin-tacc"
                className="card-boton-principal"
              >
                Date un gustito
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }} className="card-principal">
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="imagen-dispositivo-chico"
              alt="Imagen 2"
            />
            <Card.Body>
              <Card.Title className="card-titulo-principal">
                Sobre nosotros
              </Card.Title>
              <Card.Text>
                Conoce nuestra apasionante historia y el compromiso que nos
                impulsa a ofrecerte experiencias inolvidables.
              </Card.Text>
              <Link
                className="cards-productos-principales"
                to="/acercadenosotros"
              >
                Ver mas
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="contenedor-productos-principal">
          <h2 className="fw-bold titulos-principal">TODAS NUESTRAS PASTAS</h2>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=" "
              maxLength="100"
            />
            <label htmlFor="floatingInput">
              <i className="bi bi-search"></i>Buscar
            </label>
          </div>
          <h1 className="text-center fw-bold subtitulos-principal">
            Nuestra Seleccion de pastas
          </h1>
          <hr className="" />
          <Container className="contenedor-productos-seleccionados">
            {productos.map((producto) => (
              <CardProducto
                key={producto._id}
                user={usuarioLogeado}
                producto={producto}
              ></CardProducto>
            ))}
          </Container>

          <h3 className="fw-bold subtitulos-principal">Veganas</h3>
          <hr className="" />
          <div className="row contenedor-menu"></div>

          <h3 id="productos-sin-tacc" className="fw-bold subtitulos-principal">
            Vegetariano
          </h3>
          <hr className="" />
          <div className="row contenedor-menu"></div>

          <h3 id="productos-sin-tacc" className="fw-bold subtitulos-principal">
            Sin TACC (Trigo, Avena, Cebada, Centeno)
          </h3>
          <hr className="" />
          <div className="row contenedor-menu"></div>

          <h3 id="productos-sin-tacc" className="fw-bold subtitulos-principal">
            Pastas con carne
          </h3>
          <hr className="" />
          <div className="row contenedor-menu"></div>
        </div>

      </section>

      <Footer />
    </body>
  );
};

export default Inicio;

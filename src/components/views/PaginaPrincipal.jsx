import "./paginaprincipal.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imagenCarousel1 from "../../assets/foto-carousel-1.jpg";
import imagenCarousel2 from "../../assets/foto-carousel-2.jpg";
import imagenCarousel3 from "../../assets/foto-carousel-3.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";



const PaginaPrincipal = () => {
  
  return (
    <body className="color-fondo-principal">
      <CustomNav usuarioLogueado="" setUsuarioLogueado=""></CustomNav>
      <section >
        <Carousel fade className="carousel-principal">
          <Carousel.Item interval={1100}>
            <img
              src={imagenCarousel1}
              className="imagenes-carousel-principal rounded"
              alt="Imagen 1 - Platos de fideos 1"
            />
            <Carousel.Caption>
              <h2 className="carousel-titulo-principal">LAS PASTAS</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1100}>
            <img
              src={imagenCarousel2}
              className="imagenes-carousel-principal rounded"
              alt="Imagen 2 - Fideos amasados"
            />
            <Carousel.Caption>
              <h2 className="carousel-titulo-principal ">MAS RICAS</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1300}>
            <img
              src={imagenCarousel3}
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
        <div class="layout">
          <Card style={{ width: "30rem" }} className="card-principal">
            <img
              src={imagenCarousel3}
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
              <Button className="card-boton-principal">Ver mas</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }} className="card-principal">
            <img
              src={imagenCarousel2}
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
              <Button className="card-boton-principal">Date un gustito</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "30rem" }} className="card-principal">
            <img
              src={imagenCarousel2}
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
              <Button className="card-boton-principal">Ver mas</Button>
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
              maxlength="100"
            />
            <label for="floatingInput">
              <i className="bi bi-search"></i>Buscar
            </label>
          </div>
          <h3 className="fw-bold subtitulos-principal">Las mas pedidas</h3>
          <div className="row contenedor-menu">
      
          </div>
          <h3 className="fw-bold subtitulos-principal">Veganas</h3>
          <div className="row contenedor-menu">
          <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                Ensalada de pasta con tahini
                  <span className="badge bg-success card-productos-etiqueta">
                    Vegana
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1899
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                Es una deliciosa combinación de pasta al dente mezclada con una cremosa salsa de tahini y una selección de verduras frescas y crocantes.
                </Card.Text>
                <div className="layout-botones">
                  <Button className="card-productos-boton" href="#">
                    Agregar al carrito
                  </Button>
                  <Button className="card-productos-boton" href="#">
                    Saber mas
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                Pasta con salsa de cacahuete
                  <span className="badge bg-success card-productos-etiqueta">
                    Vegana
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1699
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                Pasta con salsa de cacahuate, cremosa y sabrosa, acompañada de vegetales frescos. Una combinación deliciosa y reconfortante en cada bocado.
                </Card.Text>
                <div className="layout-botones">
                  <Button className="card-productos-boton" href="#">
                    Agregar al carrito
                  </Button>
                  <Button className="card-productos-boton" href="./Error404.jsx">
                    Ver mas
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                Macarrones con hummus
                  <span className="badge bg-success card-productos-etiqueta">
                    Vegetariana
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1699
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                Pasta cocida al dente con una deliciosa y cremosa salsa de hummus. Una combinación única y sabrosa.
                </Card.Text>
                <div className="layout-botones">
                  <Button className="card-productos-boton" href="#">
                    Agregar al carrito
                  </Button>
                  <Button className="card-productos-boton" href="#">
                    Ver mas
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                Espaguetis con almendras, tomate y rúcula
                  <span className="badge bg-success card-productos-etiqueta">
                    Vegetariana
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1999
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                Una exquisita combinación de sabores, donde el pesto cremoso realza la frescura de los tomates y la rúcula. Un plato irresistible.
                </Card.Text>
                <div className="layout-botones">
                  <Button className="card-productos-boton" href="#">
                    Agregar al carrito
                  </Button>
                  <Button className="card-productos-boton" href="#">
                    Ver mas
                  </Button>
                </div>
              </Card.Body>
            </Card>
            </div>
        </div>
      </section>
      <Footer></Footer>
    </body>
  );
};

export default PaginaPrincipal;

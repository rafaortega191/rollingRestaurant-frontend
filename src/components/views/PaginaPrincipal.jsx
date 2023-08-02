import "./paginaprincipal.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imagenCarousel1 from "../../assets/foto-carousel-1.jpg";
import imagenCarousel2 from "../../assets/foto-carousel-2.jpg";
import imagenCarousel3 from "../../assets/foto-carousel-3.jpg";
import imagenAcercaDeNosotros from "../../assets/acercadenosotros.jpg";
import imagenSinTacc from "../../assets/amasando.jpg";
import imagenSitioTuristico from "../../assets/turistico.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";
import { Link } from "react-router-dom";

const PaginaPrincipal = () => {
  return (
    <body className="color-fondo-principal">
      <CustomNav usuarioLogueado="" setUsuarioLogueado=""></CustomNav>
      <section>
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
              src={imagenSitioTuristico}
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
              src={imagenSinTacc}
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
              src={imagenAcercaDeNosotros}
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
              maxlength="100"
            />
            <label for="floatingInput">
              <i className="bi bi-search"></i>Buscar
            </label>
          </div>
          <h3 className="fw-bold subtitulos-principal">Las mas pedidas</h3>
          <div className="row contenedor-menu"></div>
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
                  Es una deliciosa combinación de pasta al dente mezclada con
                  una cremosa salsa de tahini y una selección de verduras
                  frescas y crocantes.
                </Card.Text>
                <div className="layout-botones">
                  <Button className="card-productos-boton" to="/error404">
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
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
                  Pasta con salsa de cacahuate, cremosa y sabrosa, acompañada de
                  vegetales frescos. Una combinación deliciosa y reconfortante
                  en cada bocado.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
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
                  Pasta cocida al dente con una deliciosa y cremosa salsa de
                  hummus. Una combinación única y sabrosa.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
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
                  Una exquisita combinación de sabores, donde el pesto cremoso
                  realza la frescura de los tomates y la rúcula. Un plato
                  irresistible.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <h3 id="productos-sin-tacc" className="fw-bold subtitulos-principal">
            Sin TACC (Trigo, Avena, Cebada, Centeno){" "}
          </h3>
          <div className="row contenedor-menu">
            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Penne rigate
                  <span className="badge bg-warning card-productos-etiqueta">
                    Sin tacc
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1899
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Conserva su forma característica de tubo con estrías
                  exteriores que retienen la salsa, brindando una textura y
                  sabor deliciosos. Ideal para aquellos con sensibilidad al
                  gluten o que prefieren opciones sin tacc.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Pasta de porotos rojos
                  <span className="badge bg-warning card-productos-etiqueta">
                    Sin tacc
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1999
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Una opción deliciosa y saludable hecha con harina de porotos
                  rojos, alta en proteínas y sin gluten. ¡Disfruta de su sabor y
                  textura única!
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Pasta básica de buñuelos de verduras
                  <span className="badge bg-warning card-productos-etiqueta">
                    Sin tacc
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1899
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Deliciosa y versátil masa sin gluten y vegana, ideal para
                  acompañar tus buñuelos de verduras frescas. ¡Sabores naturales
                  y saludables!
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Ñoquis con salsa de tomate y albahaca
                  <span className="badge bg-warning card-productos-etiqueta">
                    Sin tacc
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1999
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Ñoquis de papa acompañados de una suave y aromática salsa de
                  tomate casera, realzada con el toque fresco de la albahaca.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <h3 id="productos-sin-tacc" className="fw-bold subtitulos-principal">
            Pastas con carne
          </h3>
          <div className="row contenedor-menu">
            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Espagueti con Carne Molida
                  <span className="badge bg-danger card-productos-etiqueta">
                    Carne
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1599
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Disfruta de una suculenta combinación de espagueti al dente,
                  bañado en una salsa casera de carne molida con sabores
                  robustos de tomate, cebolla y especias.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Guiso de carne y pasta
                  <span className="badge bg-danger card-productos-etiqueta">
                    Carne
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1499
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Nuestro guiso de carne, acompañado de fideos moñitos al dente.
                  Una fusión exquisita que cautivará tus sentidos con su rica
                  salsa de tomate, carne tierna y toques aromáticos de hierbas.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Lasagna con carne desmechada
                  <span className="badge bg-danger card-productos-etiqueta">
                    Carne
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1599
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Rellena de suculenta carne desmechada y nutritivas verduras.
                  Una mezcla de sabores reconfortantes y texturas irresistibles.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-productos">
              <Card.Body>
                <Card.Title className="card-productos-titulo">
                  Pasta con carne desmechada
                  <span className="badge bg-danger card-productos-etiqueta">
                    Carne
                  </span>
                </Card.Title>
                <Card.Subtitle className="mb-2 mb-1 text-muted card-productos-precio">
                  $1399
                </Card.Subtitle>
                <Card.Text className="card-productos-descripcion">
                  Una irresistible combinación de fideos largos al dente con
                  suave y jugosa carne desmechada. Sumérgete en una experiencia
                  gastronómica con sabores que te transportarán a la cocina
                  casera.
                </Card.Text>
                <div className="layout-botones">
                  <Button
                    className="card-productos-boton"
                    href="../views/Error404.jsx"
                  >
                    Agregar al carrito
                  </Button>
                  <Link
                    className="card-productos-boton-sabermas"
                    to="/error404"
                  >
                    Saber mas
                  </Link>
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
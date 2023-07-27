import "./paginaprincipal.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imagenCarousel1 from "../../assets/foto-carousel-1.jpg";
import imagenCarousel2 from "../../assets/foto-carousel-2.jpg";
import imagenCarousel3 from "../../assets/foto-carousel-3.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PaginaPrincipal = () => {
  return (
    <body className="color-fondo-principal">
      <section>
        <Carousel fade className="carousel-principal">
          <Carousel.Item interval={1200}>
            <img
              src={imagenCarousel1}
              className="imagenes-carousel-principal"
              alt="Imagen 1"
            />
            <Carousel.Caption>
              <h3>LAS PASTAS</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              src={imagenCarousel2}
              className="imagenes-carousel-principal"
              alt="Imagen 2"
            />
            <Carousel.Caption>
              <h3>MAS RICAS</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1200}>
            <img
              src={imagenCarousel3}
              className="imagenes-carousel-principal"
              alt="Imagen 3"
            />
            <Carousel.Caption>
              <h3>DE TUCUMAN</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      
    </body>
  );
};

export default PaginaPrincipal;

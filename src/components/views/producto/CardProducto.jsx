import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "../paginaprincipal.css";

const CardProducto = ({ producto }) => {
  const handleComprarClick = () => {
    const productoJSON = JSON.stringify(producto);
    const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];
    productosSeleccionados.push(producto);
    localStorage.setItem("productosSeleccionados", JSON.stringify(productosSeleccionados));
  };
  

  return (
    <Col md={3} ld={2} className="mb-3">
      <Card className="card-principal-seleccionados">
        <Card.Img className="imagen-card-seleccionadas" variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title className="card-productos-titulo">{producto.nombreProducto}</Card.Title>
          <Card.Text className="card-productos-precio">${producto.precio}</Card.Text>
          <Link
            className="btn card-productos-boton-sabermas"
            to={`/detalles/${producto._id}`}
          >
            Ver más
          </Link>
          <Link
            className="btn card-productos-boton-sabermas"
            to={`/pedidos/${producto._id}`}
            onClick={handleComprarClick} // Llamamos a la función al hacer clic en el botón "Comprar"
          >
            Comprar
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;

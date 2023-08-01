import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const CardProducto = ({ producto }) => {
  const handleComprarClick = () => {
    const productoJSON = JSON.stringify(producto);
    localStorage.setItem("productoSeleccionado", productoJSON);
  };

  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Link
            className="btn btn-danger me-2"
            to={`/detalles/${producto._id}`}
          >
            Ver más
          </Link>
          <Link
            className="btn btn-danger me-2"
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

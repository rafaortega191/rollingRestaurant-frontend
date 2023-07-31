import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const CardProducto = ({ producto }) => {
  const handleComprarClick = () => {
    // Convertimos el objeto producto en una cadena JSON
    const productoJSON = JSON.stringify(producto);
    // Almacenamos los datos del producto en el localStorage con una clave única, por ejemplo, 'productoSeleccionado'
    localStorage.setItem("productoSeleccionado", productoJSON);
  };

  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Link className="btn btn-danger me-2" to={`/FormularioDetalle/${producto._id}`}>
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

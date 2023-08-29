import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../paginaprincipal.css";

const CardProducto = ({ user, producto }) => {
  const navigate = useNavigate();
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

  const handleComprarClick = () => {
    if (user === null) {
      navigate("/login");
    } else {
      if (agregadoAlCarrito) {
        Swal.fire({
          icon: "error",
          title: "El producto ya está en el carrito",
          showCancelButton: true,
          confirmButtonText: "Seguir comprando",
          cancelButtonText: "Ir al carrito",
          customClass: {
            container: "botones-carrito",
          },
        }).then((result) => {
          if (result.isConfirmed) {
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate("/pedidos");
          }
        });
      } else {
        const productosSeleccionados =
          JSON.parse(localStorage.getItem("productosSeleccionados")) || [];

        productosSeleccionados.push(producto);
        localStorage.setItem(
          "productosSeleccionados",
          JSON.stringify(productosSeleccionados)
        );

        setAgregadoAlCarrito(true);

        Swal.fire({
          icon: "success",
          title: "Agregado al carrito",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <Col md={3} ld={2} xs={10} className="mb-3 card-productos-contenido">
      <Card className="card-productos">
        <Card.Img className="card-imagen" variant="top" src={producto.imagen} />
        <Card.Body className="card-productos-body">
          <Card.Title className="card-productos-titulo mt-auto">
            {producto.nombreProducto}
          </Card.Title>
          <Card.Text className="card-productos-precio mt-auto">
            Precio: ${producto.precio}
          </Card.Text>
          <button
            className="btn card-productos-boton"
            onClick={handleComprarClick}
          >
            {agregadoAlCarrito ? "Ya en el carrito" : "Agregar al carrito"}
          </button>
          <Link
            className="btn card-productos-boton"
            to={`/detalles/${producto._id}`}
          >
            Ver más
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;

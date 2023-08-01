import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { consultaProducto } from "../helpers/queries";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaAgregarPedido } from "../helpers/queries"; // Asume que esta función está disponible y realiza la inserción en la base de datos
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";

const Pedidos = ({ usuarioLogeado, setUsuarioLogueado }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    // Leer los datos del producto almacenados en el localStorage con la clave "productoSeleccionado"
    const productoJSON = localStorage.getItem("productoSeleccionado");
    if (productoJSON) {
      // Si se encontraron datos en el localStorage, convertir la cadena JSON en un objeto y asignarlos al estado
      const productoSeleccionado = JSON.parse(productoJSON);
      setProducto(productoSeleccionado);
    } else {
      // Si no se encontraron datos en el localStorage, obtener los datos del producto mediante la consulta
      consultaProducto(id).then((respuesta) => {
        if (respuesta) {
          console.log(respuesta);
          setProducto(respuesta);
        } else {
          Swal.fire(
            "Ocurrió un error",
            "Intente esta operación en unos minutos",
            "error"
          );
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCompra = () => {
    // Cambiar el estado del producto a "pendiente" antes de realizar la compra
    const productoPendiente = { ...producto, estado: "pendiente" };

    // Llamar a la función para insertar los datos en la base de datos
    consultaAgregarPedido(productoPendiente).then((respuesta) => {
      if (respuesta) {
        Swal.fire(
          "¡Compra realizada!",
          "La compra se ha realizado exitosamente.",
          "success"
        );
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Intente esta operación en unos minutos",
          "error"
        );
      }
    });
  };

  return (
    <>
      <CustomNav
        usuarioLogueado={usuarioLogeado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></CustomNav>

      <Container className="my-3 container-fluid">
        <h1>Carro de la compra</h1>
        <hr />
        <h2>Estás a punto de comprar esto:</h2>
        <Card>
          <Row>
            <Col md={6}>
              <Card.Img variant="top" src={producto.imagen} />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title>{producto.nombreProducto}</Card.Title>
                <hr />
                <Card.Text>
                  {producto.descripcion}
                  <br />
                  <br />
                  <span className="text-danger fw-semibold ">
                    Categoria:
                  </span>{" "}
                  {producto.categoria}
                  <br />
                  <span className="text-danger fw-semibold ">Precio:</span> $
                  {producto.precio}
                </Card.Text>
                <p>Se te puede aplicar impuestos a esta compra*</p>
                <button className="btn btn-danger" onClick={handleCompra}>
                  COMPRAR
                </button>
                <br />
                <Link className="btn btn-danger mt-2" to="/">
                  Cancelar
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Pedidos;

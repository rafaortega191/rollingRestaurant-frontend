import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { consultaProducto } from "../helpers/queries";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaAgregarPedido } from "../helpers/queries";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid"; // Importar la función uuidv4 de la biblioteca uuid
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";

const Pedidos = ({ usuarioLogeado, setUsuarioLogueado }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [cantidad, setCantidad] = useState(1); // Estado para almacenar la cantidad seleccionada
  const navegacion = useNavigate();

  useEffect(() => {
    // Leer los datos del producto almacenados en el localStorage con la clave "productoSeleccionado"
    const productoJSON = localStorage.getItem("productoSeleccionado");
    if (productoJSON) {
      // Si se encontraron datos en el sessionStorage, convertir la cadena JSON en un objeto y asignarlos al estado
      const productoSeleccionado = JSON.parse(productoJSON);
      setProducto(productoSeleccionado);
    } else {
      // Si no se encontraron datos en el sessionStorage, obtener los datos del producto mediante la consulta
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

  const handleCancelarCompra = () => {
    localStorage.clear();
  }

  const handleCompra = () => {
    // Leer el nombre del usuario almacenado en el sessionStorage con la clave "nombreUsuario"
    const nombreUsuario = sessionStorage.getItem("usuario");

    // Obtener la fecha actual en formato argentino
    const fechaActual = format(new Date(), "dd/MM/yyyy");

    // Generar un ID aleatorio único para el pedido usando la función uuidv4 y eliminar los guiones
    const pedidoId = uuidv4().replace(/-/g, '');

    // Calcular el precio total multiplicando el precio del producto por la cantidad
    const precioTotal = producto.precio * cantidad;

    // Fusionar el nombre del usuario, la fecha actual, la cantidad, el precio total y el estado actual del producto
    const productoPendiente = {
      ...producto,
      id: pedidoId,
      nombreUsuario,
      fechaActual,
      estado: "pendiente",
      cantidad: parseInt(cantidad), // Convertir la cantidad a número entero
      precioTotal,
    };

    navegacion('/');

    // Llamar a la función para insertar los datos en la base de datos
    consultaAgregarPedido(productoPendiente).then((respuesta) => {
      if (respuesta && sessionStorage.getItem('usuario')) {
        Swal.fire(
          "¡Compra realizada!",
          "La compra se ha realizado exitosamente. Muchas Gracias.",
          "success"
        );
      
        // Limpiar el sessionStorage después de la compra
        localStorage.clear();
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Intente esta operación en unos minutos",
          "error"
        );
      }
      
    });
  };

  const handleChangeCantidad = (event) => {
    const value = event.target.value;
    setCantidad(value); // Actualizar el estado de la cantidad
  };

  return (
    <section>
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
                <span className="text-danger fw-semibold ">Categoria:</span>{" "}
                {producto.categoria}
                <br />
                <span className="text-danger fw-semibold ">Precio:</span>{" "}
                ${producto.precio}
              </Card.Text>
              <p>Se te puede aplicar impuestos a esta compra*</p>
              
              {/* Agregar el campo de entrada para la cantidad */}
              <label htmlFor="cantidad">Cantidad:</label>
              <label htmlFor="cantidad">Cantidad:</label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                value={cantidad}
                onChange={handleChangeCantidad}
                min="1"
              />

              {/* Mostrar el precio total */}
              <p>Precio Total: ${(producto.precio || 0) * (cantidad || 0)}</p>


              <button className="btn btn-danger" onClick={handleCompra}>
                COMPRAR
              </button>
              <br />
              <button className="btn btn-danger mt-2" onClick={handleCancelarCompra}>
                Cancelar Compra
              </button>
              <br />
              <Link className="btn btn-danger mt-2" to="/">
                Volver a inicio
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
      <Footer></Footer>
    </section>
  );
};

export default Pedidos;

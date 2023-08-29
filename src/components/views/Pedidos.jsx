import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import CustomNav from "../common/CustomNav";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { consultaAgregarPedido } from "../helpers/queries";
import Swal from "sweetalert2";
import "./Pedidos.css";

const Pedidos = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const navegacion = useNavigate();

  useEffect(() => {
    // Obtener los productos seleccionados del Local Storage
    const productosJSON = localStorage.getItem("productosSeleccionados");
    const productos = JSON.parse(productosJSON) || [];

    setProductosSeleccionados(productos);
  }, []);

  const handleEliminarClick = (indice) => {
    const nuevosProductos = [...productosSeleccionados];
    nuevosProductos.splice(indice, 1);
    setProductosSeleccionados(nuevosProductos);
    localStorage.setItem(
      "productosSeleccionados",
      JSON.stringify(nuevosProductos)
    );
  };

  const handleCantidadChange = (indice, cantidad) => {
    const nuevosProductos = [...productosSeleccionados];
    nuevosProductos[indice].cantidad = cantidad;
    setProductosSeleccionados(nuevosProductos);
    localStorage.setItem(
      "productosSeleccionados",
      JSON.stringify(nuevosProductos)
    );
  };

  const calcularPrecioTotal = () => {
    let total = 0;
    productosSeleccionados.forEach((producto) => {
      total += producto.precio * (producto.cantidad || 1);
    });
    return total;
  };

  const handleCompra = () => {
    const nombreUsuario = sessionStorage.getItem("usuario");
    const fechaActual = format(new Date(), "yyyy-MM-dd");
    const pedidoId = uuidv4().replace(/-/g, "");

    const productosLocalStorage =
      JSON.parse(localStorage.getItem("productosSeleccionados")) || [];

    const productosPendientes = {
      _id: pedidoId,
      fecha: fechaActual,
      usuario: nombreUsuario,
      productos: productosLocalStorage.map((producto) => ({
        nombreProducto: producto.nombreProducto,
        cantidad: producto.cantidad,
        precio: producto.precio,
        imagen: producto.imagen,
        categoria: producto.categoria,
        descripcion: producto.descripcion,
      })),
      estado: "pendiente",
      precioTotal: calcularPrecioTotal(productosLocalStorage), // Asegúrate de tener la función calcularPrecioTotal definida
    };

    consultaAgregarPedido(productosPendientes).then((respuesta) => {
      if (respuesta) {
        if (
          sessionStorage.getItem("usuario") &&
          localStorage.getItem("productosSeleccionados")
        ) {
          // Usuario loggeado y productos en el carrito
          Swal.fire(
            "¡Compra realizada!",
            "La compra se ha realizado exitosamente. Muchas Gracias.",
            "success"
          );

          localStorage.removeItem("productosSeleccionados");
          navegacion("/");
        } else if (!sessionStorage.getItem("usuario")) {
          // Usuario no loggeado
          Swal.fire(
            "¡Error!",
            "Debes iniciar sesión para realizar una compra.",
            "error"
          );
        } else {
          // Usuario loggeado pero sin productos en el carrito
          Swal.fire(
            "¡Error!",
            "Tu carrito está vacío. Agrega productos antes de realizar una compra.",
            "error"
          );
        }
      }
    });
  };

  return (
    <section>
      <CustomNav
        usuarioLogeado={usuarioLogeado}
        setUsuarioLogeado={setUsuarioLogeado}
      ></CustomNav>
      <Container>
        <h1 className="h1-titulo text-center m-4">Tus Pedidos</h1>
        <hr />
        <div className="row card-pedidos-container rounded-4">
          {productosSeleccionados.map((producto, index) => (
            <div className="col-md-4 d-flex mt-3" key={index}>
              <div className="card mb-4 d-flex flex-column">
                <img
                  src={producto.imagen}
                  className="card-img-top"
                  alt={producto.nombreProducto}
                />
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title">{producto.nombreProducto}</h5>
                    <p className="card-text">Precio: {producto.precio}</p>
                    <p className="card-text">Categoría: {producto.categoria}</p>
                    <p className="card-text">{producto.descripcion}</p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="btn btn-danger mt-4 mb-2"
                      onClick={() => handleEliminarClick(index)}
                    >
                      Eliminar
                    </button>
                    <br />
                    <label>Cantidad:</label>
                    <input
                      type="number"
                      value={producto.cantidad || 1}
                      onChange={(e) =>
                        handleCantidadChange(index, parseInt(e.target.value))
                      }
                      className="form-control"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pago-container rounded-3 d-flex flex-column align-items-center w-50 ">
          <h4 className="text-center pago-texto">
            Precio Total: {calcularPrecioTotal()}
          </h4>

          <button className="btn btn-danger m-2" onClick={handleCompra}>
            COMPRAR
          </button>

          <Link className="btn btn-danger m-2" to="/">
            Volver a inicio
          </Link>
        </div>
      </Container>

      <Footer></Footer>
    </section>
  );
};

export default Pedidos;

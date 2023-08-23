import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../common/Footer';
import CustomNav from '../common/CustomNav';
import { Link } from 'react-router-dom';
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { consultaAgregarPedido } from '../helpers/queries';
import Swal from 'sweetalert2';

const Pedidos = ({usuarioLogeado, setUsuarioLogeado}) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

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
    localStorage.setItem("productosSeleccionados", JSON.stringify(nuevosProductos));
  };

  const handleCantidadChange = (indice, cantidad) => {
    const nuevosProductos = [...productosSeleccionados];
    nuevosProductos[indice].cantidad = cantidad;
    setProductosSeleccionados(nuevosProductos);
    localStorage.setItem("productosSeleccionados", JSON.stringify(nuevosProductos));
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
    const pedidoId = uuidv4().replace(/-/g, '');
  
    const productosLocalStorage = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];
  
    const productosPendientes = {
      _id: pedidoId,
      fecha: fechaActual,
      usuario: nombreUsuario,
      productos: productosLocalStorage.map(producto => ({
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
      if (respuesta && sessionStorage.getItem("usuario") && localStorage.getItem("productosSeleccionados")) {
        Swal.fire(
          "¡Compra realizada!",
          "La compra se ha realizado exitosamente. Muchas Gracias.",
          "success"
        );
  
        localStorage.removeItem("productosSeleccionados");
        
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
    <section>
      <CustomNav 
      usuarioLogeado={usuarioLogeado}
      setUsuarioLogeado={setUsuarioLogeado}
      ></CustomNav>
    <Container>
      <h2>Tus Pedidos</h2>
      <div className="row">
        {productosSeleccionados.map((producto, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombreProducto} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombreProducto}</h5>
                <p className="card-text">Precio: {producto.precio}</p>
                <p className="card-text">Categoría: {producto.categoria}</p>
                <p className="card-text">{producto.descripcion}</p>
                {/* Otros detalles del producto */}
                <button
                  className="btn btn-danger"
                  onClick={() => handleEliminarClick(index)}
                >
                  Eliminar
                </button>
                <br />
                {/* Agregar el campo de entrada para la cantidad */}
                <label>Cantidad:</label>
                  <input
                    type="number"
                    value={producto.cantidad || 1}
                    onChange={(e) => handleCantidadChange(index, parseInt(e.target.value))}
                    className="form-control"
                    min="1"
                  />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4>Precio Total: {calcularPrecioTotal()}</h4>
      <br />
      <button className="btn btn-danger" onClick={handleCompra}>COMPRAR</button>
      <br />
      <Link className="btn btn-danger mt-2" to="/">Volver a inicio</Link>
    </Container>
    <Footer></Footer>
    </section>
  );
};

export default Pedidos;

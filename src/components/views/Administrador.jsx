import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  consultaListaPedidos,
  consultaListaProductos,
  consultaListaUsuarios,
} from "../helpers/queries";
import { Link } from "react-router-dom";
import CargarProducto from "./producto/CargarProducto";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";
import CargarUsuario from "./usuario/CargarUsuario";
import CargarPedido from "./pedido/CargarPedido";
import './administrador.css'

const Administrador = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Fetch and update the productos list
    consultaListaProductos().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  useEffect(() => {
    // Fetch and update the productos list
    consultaListaPedidos().then((respuesta) => {
      setPedidos(respuesta);
    });
  }, []);

  useEffect(() => {
    // Fetch and update the usuarios list
    consultaListaUsuarios().then((respuesta) => {
      setUsuarios(respuesta);
    });
  }, []);

  
  

  console.log(usuarios);
  return (
    <>
      <CustomNav
        usuarioLogeado={usuarioLogeado}
        setUsuarioLogeado={setUsuarioLogeado}
      ></CustomNav>
      <section className="bg-light rounded-2 container-fluid text-truncate">
        <h1 className="display-4 mt-4">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/productos/crearproducto">
          Agregar nuevo producto al sistema
        </Link>

        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Opciones</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>URL de Imagen</th>
              <th>descripcion</th>
              <th>disponible</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <CargarProducto
                key={producto._id}
                producto={producto}
                setProductos={setProductos}
              ></CargarProducto>
            ))}
          </tbody>
        </Table>
        <hr />
        <h1 className="display-4 ">Pedidos ingresados</h1>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Opciones</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>URL de Imagen</th>
              <th>descripcion</th>
              <th>estado</th>
              <th>usuario</th>
              <th>cantidad</th>
              <th>precioTotal</th>
              <th>fecha</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <CargarPedido
                key={pedido._id}
                pedido={pedido}
                setPedidos={setPedidos}
              ></CargarPedido>
            ))}
          </tbody>
        </Table>
        <hr />
        <h1 className="display-4 ">Usuarios Registrados</h1>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Opciones</th>
              <th>Email</th>
              <th>Es Admin?</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <CargarUsuario
                key={usuario._id}
                usuario={usuario}
                setUsuarios={setUsuarios}
              ></CargarUsuario>
            ))}
          </tbody>
        </Table>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Administrador;

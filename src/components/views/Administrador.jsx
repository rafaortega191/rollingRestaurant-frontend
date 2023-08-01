import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { consultaListaProductos, consultaListaUsuarios } from "../helpers/queries";
import { Link } from "react-router-dom";
import CargarProducto from "./producto/CargarProducto";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";
import CargarUsuario from "./usuario/CargarUsuario";

const Administrador = ({ usuarioLogeado, setUsuarioLogueado }) => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Fetch and update the productos list
    consultaListaProductos().then((respuesta) => {
      setProductos(respuesta);
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
      <section className="bg-light rounded-2 text-center container-fluid">
        <CustomNav
          usuarioLogueado={usuarioLogeado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></CustomNav>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Link className="btn btn-primary" to="/administrador/crearproducto">
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>URL de Imagen</th>
              <th>Opciones</th>
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
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
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

import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { consultaListaProductos } from "../helpers/queries";
import { Link } from "react-router-dom";
import CargarProducto from "./producto/CargarProducto";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultaListaProductos().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <>
      <section className="container mainSection bg-light rounded-2">
        <CustomNav usuarioLogueado="" setUsuarioLogueado=""></CustomNav>
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
      </section>
      <Footer></Footer>
    </>
  );
};

export default Administrador;

import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { consultaListaProductos } from "../helpers/queries";
import { useEffect, useState } from "react";
import CustomNav from "../common/CustomNav";
import Footer from "../common/Footer";

const Inicio = ({ usuarioLogeado, setUsuarioLogueado }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultaListaProductos().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <section className="">
      <CustomNav
        usuarioLogueado={usuarioLogeado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></CustomNav>
      <img
        className="w-100 h-auto p-5"
        src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg"
        alt="fondo cafe"
      />
      <Container>
        <h1 className="text-center">Nuestra Seleccion de pastas</h1>
        <hr className="" />
        <Row>
          {productos.map((producto) => (
            <CardProducto key={producto._id} producto={producto}></CardProducto>
          ))}
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default Inicio;

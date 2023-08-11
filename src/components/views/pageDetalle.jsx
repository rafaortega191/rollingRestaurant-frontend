import { Container, Row, Col, Image, Table, Nav } from "react-bootstrap";
import "./pageDetalle.css";
import FormularioDetalle from "./detalle/FormularioDetalle.jsx";
import CustomNav from "../common/CustomNav";
import Footer from "../common/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultaProducto } from "../helpers/queries";

const ProductoDetalles = ({
  usuarioLogeado,
  setUsuarioLogeado,
}) => {

  const { id } = useParams();

  const [producto, setProducto] = useState({});
  useEffect(() => {
    consultaProducto(id).then((respuesta) => {
      setProducto(respuesta);
    });
  }, []);


  const aux_detalle = {
    "Categoria" : producto.categoria,
    "Estado":  producto.estado,
  };

  const dataList = Object.entries(aux_detalle);

  return (
    <>
      <CustomNav
        usuarioLogeado={usuarioLogeado}
        setUsuarioLogeado={setUsuarioLogeado}
      ></CustomNav>
      <section className="py-5">
        <Container>
          <Row className="gx-5">
            <Col lg={6}>
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <Image
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit"
                  src={producto.imagen}
                  alt="Product"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="ps-lg-3">
                <h4 className="title text-dark">{producto.nombreProducto}</h4>

                <div className="mb-3">
                  <span className="h5">${producto.precio}</span>
                  <span className="text-muted">/por producto</span>
                </div>
                <p>{producto.descripcion}</p>
                <div className="row">
                  <Table className="border mt-3 mb-2">
                    <tbody>
                      {dataList.map(
                        ([key, value]) =>
                          value && (
                            <tr key={key}>
                              <th className="py-2">{key}:</th>
                              <td className="py-2">{value}</td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </Table>
                </div>

                <hr />

                <FormularioDetalle
                  nombre_producto={producto.nombreProducto}
                  id_producto={id}
                ></FormularioDetalle>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ProductoDetalles;

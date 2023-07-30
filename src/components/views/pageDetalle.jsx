import { Container, Row, Col, Image, Table, Nav } from "react-bootstrap";
import "./pageDetalle.css";
import FormularioDetalle from "./detalle/FormularioDetalle.jsx";

const ProductoDetalles = ({
  id_producto,
  descripcion_producto,
  detalle_producto,
  detalles_ingredientes,
  url_imagen_producto,
  nombre_producto,
  precio_producto,
}) => {
  const aux_id_producto = 1;
  const aux_descripcion_larga_1 =
    "Ñoquis de papa: Deliciosos y suaves ñoquis preparados con auténtica papa fresca, una receta tradicional transmitida de generación en generación. Experiencia culinaria reconfortante con sabores italianos inolvidables.";

  const aux_detalle_1 = {
    "Tiene Tacc": "Si",
    "Tiene Harina Integral": "Si",
    "Tiene Lactosa": "No",
  };

  const aux_precio_producto = 20.2;

  const aux_url_imagen_producto =
    "https://images.pexels.com/photos/6659622/pexels-photo-6659622.jpeg";

  const aux_nombre_producto = "Ñoquis de papa";

  const dataList = Object.entries(aux_detalle_1);

  return (
    <>
    <Nav usuarioLogueado='' setUsuarioLogueado=''></Nav>
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
                src={aux_url_imagen_producto}
                alt="Product"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="ps-lg-3">
              <h4 className="title text-dark">{aux_nombre_producto}</h4>

              <div className="mb-3">
                <span className="h5">${aux_precio_producto}</span>
                <span className="text-muted">/por producto</span>
              </div>
              <p>{aux_descripcion_larga_1}</p>
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
                nombre_producto={aux_nombre_producto}
                id_producto={aux_id_producto}
              ></FormularioDetalle>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  );
};

export default ProductoDetalles;

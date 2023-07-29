import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 footer-banner">
      <Container>
        <Row>
          <Col lg={6} md={12} mb={4}>
            <h5 className="my-3" style={{ letterSpacing: "2px", color: "#818963" }}>
              Roling Restaurant
            </h5>

            <h6 className="mb-3" style={{ letterSpacing: "2px", color: "#818963" }}>
              ¡Sabor italiano en cada bocado! Descubre la pasión de nuestra pasta online!
            </h6>
            <p>
              Sumérgete en el encanto de Italia con cada bocado. Descubre la pasión de nuestra pasta en línea y déjate llevar por una experiencia culinaria inigualable.
            </p>
          </Col>
          <Col lg={2} md={6} mb={4}>
            <h5 className="my-3" style={{ letterSpacing: "2px", color: "#818963" }}>
              Enlaces
            </h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link to="/registro" style={{ color: "#4f4f4f" }}>
                  Registro
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/login" style={{ color: "#4f4f4f" }}>
                  Login
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/login" style={{ color: "#4f4f4f" }}>
                  Pedidos
                </Link>
              </li>
              <li>
                <Link to="/acercadenosotros" style={{ color: "#4f4f4f" }}>
                  Nosotros
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6} mb={4}>
            <h5 className="my-3" style={{ letterSpacing: "2px", color: "#818963" }}>
              Horario
            </h5>
            <Table style={{ color: "#4f4f4f", borderColor: "#666" }}>
              <tbody>
                <tr>
                  <td>Lunes - Viernes:</td>
                  <td>09:30 - 12:30</td>
                </tr>
                <tr>
                  <td>Lunes - Viernes:</td>
                  <td>20:00 - 21:30</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright:
        <Link className="text-dark mx-2" to="#">
          rollingRestaurant.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-5 footer-estilo">
      <Container>
        <Row>
          <Col lg={6} md={12} mb={4}>
            <h5 className="my-3 color enlaces text-center text-sm-start" style={{ letterSpacing: "2px" }}>
              Roling Restaurant
            </h5>
            <h6 className="mb-3 h6-footer text-center text-sm-start" style={{ letterSpacing: "2px" }}>
              ¡Sabor italiano en cada bocado! Descubre la pasión de nuestra pasta online!
            </h6>
            <div className="d-flex justify-content-center mx-auto">
              <Button b className="m-1 botonesIconos">
                <AiFillFacebook size="20" to="/Error404" href="/error404"/>
              </Button>
              <Button className="m-1 botonesIconos" href="/error404">
                <AiOutlineTwitter size="20" />
              </Button>
              <Button className="m-1 botonesIconos enlaces" href="/error404">
                <AiFillInstagram size="20" />
              </Button>
            </div>
          </Col>
          <Col lg={2} md={6} mb={4}>
            <h5 className="my-3 titulo-footer color text-center text-sm-start" style={{ letterSpacing: "2px" }}>
              Sitios
            </h5>
            <ul className="list-unstyled mb-0 text-center text-sm-start">
              <li className="mb-1">
                <Link to="/registro" className="color enlaces">
                  Registro
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/login" className="color enlaces">
                  Login
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/login" className="color enlaces">
                  Pedidos
                </Link>
              </li>
              <li>
                <Link to="/acercadenosotros" className="color enlaces">
                  Nosotros
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6} mb={4}>
            <h5 className="my-3 titulo-footer color text-center text-sm-start" style={{ letterSpacing: "2px" }}>
              Horarios
            </h5>
            <Table style={{ color: "#4f4f4f", borderColor: "#666" }}>
              <tbody>
                <tr>
                  <td>Lunes a Jueves:</td>
                  <td>09:30 - 12:30</td>
                </tr>
                <tr>
                  <td>Lunes a Jueves:</td>
                  <td>20:00 - 21:30</td>
                </tr>
                <tr>
                  <td>Viernes a Sábados:</td>
                  <td>10:30 - 14:30</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright:
        <Link className="text-dark mx-2" to="/home">
          rollingRestaurant.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;

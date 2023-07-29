import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/trace.svg";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          {" "}
          <Link to="/home">
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "50%", height: "50%", objectFit: "relative" }}
              className="mb-3"
            />
          </Link>
          <h5 className="text-uppercase">Roling Restaurant</h5>
          <p>
            ¡Sabor italiano en cada bocado! Descubre la pasión de nuestra pasta
            online.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-3" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Horarios de Atención</h5>
          <ul className="list-unstyled">
            <li>Lunes a Viernes: 09:30 - 12:30</li>
            <li>Lunes a Viernes: 20:00 - 21:30</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
    </div>
  </footer>
);

export default Footer;

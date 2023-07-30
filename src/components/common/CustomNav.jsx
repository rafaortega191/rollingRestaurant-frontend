import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/trace.svg";
import "./CustomNav.css";
import { AiOutlineShoppingCart,AiOutlineUser, } from "react-icons/ai";

const CustomNav = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioLogueado({});
    sessionStorage.removeItem("usuario");
    navegacion("/");
  };

  return (
    <>
      <Container fluid className="text-center py-3 navColor">
        <Nav.Link as={NavLink} to="/home">
          <Image
            src={logo}
            alt="Logo"
            className="mb-2 logo"
          />
          <div className=" d-flex justify-content-center align-items-center tituloNav">
            <Navbar.Brand as={NavLink} to="/home" className="fs-4 tituloNav">
              Rolling Restaurant
            </Navbar.Brand>
          </div>
        </Nav.Link>
      </Container>
      {/* Barra de navegación */}
      <Navbar expand="lg" className="mx-3 navEstilo justify-content-between">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className={"nav-item nav-link"} to={"/pedidos"}>
                Pedidos
                <AiOutlineShoppingCart className="fs-5"/>
              </NavLink>
              {usuarioLogueado.nombreUsuario ? (
                <>
                  <NavLink
                    end
                    className={"nav-item nav-link"}
                    to={"/administrador"}
                  >
                    Administrador
                  </NavLink>
                  <Button variant="dark" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink end className={"nav-item nav-link"} to={"/login"}>
                  Login
                </NavLink>
              )}

              <NavLink end className={"nav-item nav-link"} to={"/registro"}>
                Registro
                <AiOutlineUser></AiOutlineUser>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNav;

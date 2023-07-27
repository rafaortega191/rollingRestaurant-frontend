import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/trace.svg";
import "./CustomNav.css";

const CustomNav = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioLogueado({});
    sessionStorage.removeItem("usuario");
    navegacion("/");
  };

  return (
    <>
      {/* Imagen centrada arriba de la barra de navegación */}
      <div className="text-center mt-4">
        {/* Enlace a la página de inicio */}
        <Link to="/home">
          <Image src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <Container className="mb-4 d-flex justify-content-center align-items-center">
        <Navbar.Brand href="/home" className="tituloNav fs-4 fw-bold">
        <span className="brand-text">Rolling Restaurant</span>        </Navbar.Brand>
      </Container>
      {/* Barra de navegación */}
      <Navbar expand="lg" className="mx-5 mb-1 Navbar ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className={"nav-item nav-link fs-5"} to={"/pedidos"}>
                Pedidos
              </NavLink>
              {usuarioLogueado.nombreUsuario ? (
                <>
                  <NavLink
                    end
                    className={"nav-item nav-link fs-5 fw-bold"}
                    to={"/administrador"}
                  >
                    Administrador
                  </NavLink>
                  <Button variant="dark" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <NavLink
                  end
                  className={"nav-item nav-link fs-5"}
                  to={"/login"}
                >
                  Login
                </NavLink>
              )}

              <NavLink
                end
                className={"nav-item nav-link fs-5"}
                to={"/registro"}
              >
                Registro
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNav;

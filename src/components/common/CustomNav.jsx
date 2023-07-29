import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/trace.svg"; 
import "./CustomNav.css";

const CustomNav = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  console.log(usuarioLogueado);

  const logout = () => {
    setUsuarioLogueado({});
    sessionStorage.removeItem("usuario");
    navegacion("/home");
  };

  return (
    <>
      {/* Imagen centrada arriba de la barra de navegación */}
      <div className="text-center mt-3">
        {/* Enlace a la página de inicio */}
        <Link to="/home">
          <Image
            src={logo}
            alt="Logo"
            style={{ width: "5%", height: "5%", objectFit: "relative" }}
            className="mb-3"
          />
        </Link>
      </div>
      <Container className="mb-4 d-flex justify-content-center align-items-center">
        {" "}
        <Navbar.Brand href="/home" className="tituloNav fs-4 fw-bold">
          <span className="brand-text">Rolling Restaurant</span>
        </Navbar.Brand>
       {" "}
      </Container>
      {/* Barra de navegación */}
      <Navbar expand="lg" className="mx-5 Navbar justify-content-between">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {usuarioLogueado.nombreUsuario ? (
                <>
                  <NavLink end className={"nav-item nav-link"} to={"#"}>
                    Hola {usuarioLogueado.nombreUsuario}!
                  </NavLink>

                  <NavLink end className={"nav-item nav-link"} to={"/pedidos"}>
                    Pedidos
                  </NavLink>

                  {usuarioLogueado.isAdmin ? (
                    <>
                      <NavLink
                        end
                        className={"nav-item nav-link"}
                        to={"/administrador"}
                      >
                        Administrador
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink end className={"nav-item nav-link"} to={"/home"}>
                        Home
                      </NavLink>
                    </>
                  )}

                  <Button variant="dark" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink end className={"nav-item nav-link"} to={"/login"}>
                    Login
                  </NavLink>

                  <NavLink end className={"nav-item nav-link"} to={"/registro"}>
                    Registro
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNav;

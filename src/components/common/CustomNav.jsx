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
      <div className="text-center mt-3">
        <Link to="/">
          <Image
            src={logo}
            alt="Logo"
            style={{ width: '5%', height: '5%', objectFit: 'relative' }}
            className="mb-3"
          />
        </Link>
      </div>
      {/* Barra de navegación */}
      <Navbar  expand="lg" className="mx-5 Navbar justify-content-between">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={"nav-item nav-link"} to={"/pedidos"}>
              Pedidos
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
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
};

export default CustomNav;

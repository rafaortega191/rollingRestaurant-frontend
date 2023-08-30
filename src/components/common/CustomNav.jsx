import React from "react";
import "./CustomNav.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/trace.svg";
import Swal from "sweetalert2";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const CustomNav = (props) => {
  const { usuarioLogeado, setUsuarioLogeado } = props;
  const navegacion = useNavigate();

  const logout = async () => {
    Swal.fire({
      title: "¿Deseas Cerrar Sesión?",
      showDenyButton: true,
      confirmButtonText: "Cerrar Sesión",
      denyButtonText: "Cancelar",
      customClass: {
        confirmButton: "swal2-confirm cerrar-sesion-confirm-button",
      },
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Cerraste Sesion", "", "success");
        setUsuarioLogeado(null);
        sessionStorage.removeItem("usuario");
        navegacion("/");
      }
    });
  };

  return (
    <>
      <Container fluid className="text-center py-3 navColor">
        <Image src={logo} alt="Logo" className="mb-2 logo" />
        <div className="d-flex justify-content-center align-items-center tituloNav">
          <Navbar.Brand as={NavLink} to="/" className="fs-4 tituloNav">
            Rolling Restaurant
          </Navbar.Brand>
        </div>
      </Container>
      <Navbar expand="md" className="mx-md-3 navEstilo justify-content-between">
        <Container className="container-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className="nav-item nav-link" to="/pedidos">
                Pedidos <AiOutlineShoppingCart className="fs-5" />
              </NavLink>
              {usuarioLogeado === null ? (
                <>
                  <NavLink end className="nav-item nav-link" to="/login">
                    Login
                  </NavLink>

                  <NavLink end className="nav-item nav-link" to="/registro">
                    Registro <AiOutlineUser className="fs-5" />
                  </NavLink>
                </>
              ) : usuarioLogeado?.es_admin ? (
                <>
                  <NavLink
                    end
                    className="nav-item nav-link"
                    to="/administrador"
                  >
                    Administrador {usuarioLogeado?.nombreUsuario}
                  </NavLink>
                  <NavLink end className="nav-item nav-link" onClick={logout}>
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink end className="nav-item nav-link" to="/">
                    {usuarioLogeado?.nombreUsuario}
                  </NavLink>
                  <NavLink end className="nav-item nav-link" onClick={logout}>
                    Logout
                  </NavLink>
                </>
              )}

              {/* {usuarioLogeado.es_admin === true ? (
                <>
                  <NavLink
                    end
                    className="nav-item nav-link"
                    to="/administrador"
                  >
                    Administrador: {usuarioLogeado.nombreUsuario}
                  </NavLink>

                  <NavLink end className="nav-item nav-link" onClick={logout}>
                    Logout
                  </NavLink>
                </>
              ) : usuarioLogeado.es_admin === false &&
                usuarioLogeado.es_admin !== undefined &&
                usuarioLogeado.es_admin !== null ? (
                <>
                  <NavLink end className="nav-item nav-link" to="/">
                    {usuarioLogeado.nombreUsuario}
                  </NavLink>

                  <NavLink end className="nav-item nav-link" onClick={logout}>
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink end className="nav-item nav-link" to="/login">
                    Login
                  </NavLink>

                  <NavLink end className="nav-item nav-link" to="/registro">
                    Registro <AiOutlineUser className="fs-5" />
                  </NavLink>
                </>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNav;

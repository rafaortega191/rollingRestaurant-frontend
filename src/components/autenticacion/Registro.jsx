import { signup } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Registro.css";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import bcrypt from "bcryptjs";
import logo from "../../assets/logo_navbar.png";
import { useState } from "react";

const Registro = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const alternarVisibilidadContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

  const onSubmit = (usuario) => {
    usuario.password = bcrypt.hashSync(usuario.password, 2);

    signup(usuario).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        sessionStorage.setItem("usuario", JSON.stringify(respuesta));
        Swal.fire(
          "Bienvenido",
          `${respuesta.nombreUsuario} te registraste correctamente`,
          "success"
        );
        setUsuarioLogeado(respuesta);

        if (respuesta.es_admin === true) {
          navegacion("/administrador");
        } else {
          navegacion("/");
        }
      } else {
        Swal.fire("Error", "Ingrese un correo electronico diferente", "error");
      }
    });
  };

  return (
    <>
      <Container className="mainSection d-block align-items-center justify-content-center pb-3 my-3">
        <Card>
          <Card.Header className="text-center titulo" as="h3">
            <a href="/">
              <Card.Img variant="top" src={logo} className="w-50" />
            </a>
            <Card.Title className="titulo">Registro</Card.Title>
          </Card.Header>
          <Card.Body className="texto_general">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-2">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un nombre de usuario"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "El Usuario es un dato obligatorio",
                    },
                    pattern: {
                      value: /^(?!\s)(?!.*\s$)[a-zA-Z\s]+$/,
                      message:
                        "El usuario debe contener solo letras y espacios y no puede empezar ni terminar con espacios.",
                    },
                  })}
                  maxLength={35}
                />

                {errors.nombre && (
                  <div className="text-danger">
                    {errors.nombre.type === "required" && (
                      <p>El usuario es un dato obligatorio.</p>
                    )}
                    {errors.nombre.type === "pattern" && (
                      <p>{errors.nombre.message}</p>
                    )}
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Ingrese un email"
                  type="email"
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:
                        "El email debe cumplir con el formato mail@dominio.com",
                    },
                    validate: (value) => {
                      const trimmedValue = value.trim();
                      if (value !== trimmedValue) {
                        return "No se permiten espacios al principio y al final del email";
                      }
                    },
                  })}
                  maxLength={50}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type={mostrarContraseña ? "text" : "password"}
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "La contraseña es un dato obligatorio",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w\d\S]{8,50}$/,
                        message: () => {
                          let mensajeError =
                            "La contraseña no cumple con los requisitos debe tener entre 8 y 50 caracteres y no incluir espacios.";
                          const valorContraseña =
                            errors.password && errors.password.ref.value;

                          if (
                            valorContraseña &&
                            !/[A-Z]/.test(valorContraseña)
                          ) {
                            mensajeError +=
                              " La contraseña debe contener al menos una mayúscula.";
                          }

                          if (
                            valorContraseña &&
                            !/[a-z]/.test(valorContraseña)
                          ) {
                            mensajeError +=
                              " La contraseña debe contener al menos una minúscula.";
                          }

                          if (valorContraseña && !/\d/.test(valorContraseña)) {
                            mensajeError +=
                              " La contraseña debe contener al menos un dígito.";
                          }

                          return mensajeError;
                        },
                      },
                    })}
                    minLength={8}
                    maxLength={50}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={alternarVisibilidadContraseña}
                  >
                    {mostrarContraseña ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
                {errors.password && (
                  <div className="text-danger">
                    {errors.password.type === "required" && (
                      <p>La contraseña es un dato obligatorio.</p>
                    )}
                    {errors.password.type === "pattern" && (
                      <p>{errors.password.message()}</p>
                    )}
                  </div>
                )}
              </Form.Group>

              <div className="d-flex justify-content-center row">
                <p>
                  Ya tienes cuenta? <Link to="/login">Ingresa Aqui</Link>.
                </p>
                <Button className="botonIngresar px-3 my-3 w-50" type="submit">
                  Registrar
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Registro;

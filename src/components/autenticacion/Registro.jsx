import { signup } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Registro.css";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer";
import bcrypt from 'bcryptjs';

const Registro = ({usuarioLogeado,setUsuarioLogeado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    usuario.password = bcrypt.hashSync(usuario.password, 2);
  
    signup(usuario).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        console.log(respuesta)
        sessionStorage.setItem(
          "usuario",
          JSON.stringify(respuesta)
        );
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
        Swal.fire("Error", "Email o password incorrecto ", "error");
      }
    });
  };

  return (
    <>
      <CustomNav usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></CustomNav>

      <Container className="mainSection d-block align-items-center justify-content-center p-3 my-5">
        <Card className="my-5">
          <Card.Header className="text-center titulo py-3" as="h3">
            Registro
          </Card.Header>
          <Card.Body className="texto_general">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-2">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un nombre de usuario"
                  {...register("nombre", {
                    required: "El nombre  es un dato obligatorio",
                  })}
                  maxLength={50}
                />
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
                  })}
                  maxLength={50}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "La contraseña es un dato obligatorio",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w\d\S]{8,100}$/,
                      message: () => {
                        let errorMessage =
                          "La contraseña no cumple con los requisitos.";
                        const passwordValue =
                          errors.password && errors.password.ref.value;

                        if (passwordValue && !/[A-Z]/.test(passwordValue)) {
                          errorMessage +=
                            " La contraseña debe contener al menos una mayúscula.";
                        }

                        if (passwordValue && !/[a-z]/.test(passwordValue)) {
                          errorMessage +=
                            " La contraseña debe contener al menos una minúscula.";
                        }

                        if (passwordValue && !/\d/.test(passwordValue)) {
                          errorMessage +=
                            " La contraseña debe contener al menos un dígito.";
                        }

                        return errorMessage;
                      },
                    },
                  })}
                  minLength={8}
                  maxLength={100}
                />
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

              <div className="d-flex justify-content-center">
                <Button className="botonIngresar px-3 my-3" type="submit">
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

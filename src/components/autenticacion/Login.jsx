import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer.jsx";

const Login = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    login(usuario).then((respuesta) => {
      console.log(respuesta);
      if (respuesta && respuesta.status === 200) {
        sessionStorage.setItem("usuario", JSON.stringify(respuesta));
        Swal.fire(
          "Bienvenido",
          `${respuesta.nombreUsuario} iniciaste sesion correctamente`,
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
      <CustomNav
        usuarioLogeado={usuarioLogeado}
        setUsuarioLogeado={setUsuarioLogeado}
      ></CustomNav>
      <Container className="mainSection d-block align-items-center justify-content-center p-3 my-5">
        <Card className="my-5">
          <Card.Header className="text-center titulo py-3" as="h3">
            Login
          </Card.Header>
          <Card.Body className="texto_general">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese un email"
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
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
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
              <div className="d-flex justify-content-center row">
                <p>
                  No tienes cuenta?{" "}
                  <Link to="/registro">Registrate Gratis</Link>.
                </p>
                <Button className="botonIngresar px-3 my-3 w-50" type="submit">
                  Ingresar
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

export default Login;

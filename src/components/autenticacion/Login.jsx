import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import CustomNav from "../common/CustomNav.jsx";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario);

    login(usuario).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        sessionStorage.setItem(
          "usuario",
          JSON.stringify(respuesta.nombreUsuario)
        );
        Swal.fire(
          "Bienvenido",
          `${respuesta.nombreUsuario} iniciaste sesion correctamente`,
          "success"
        );
        setUsuarioLogueado(respuesta);

        // #TODO
        // Si el usuario es tipo admin, redirigir a /administrador. Sino, redirigir a /home.

        navegacion("/administrador");
      } else {
        Swal.fire("Error", "Email o password incorrecto ", "error");
      }
    });
  };

  return (
    <>
      <CustomNav usuarioLogueado="" setUsuarioLogueado=""></CustomNav>
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
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button className="botonIngresar px-3 my-3" type="submit">
                  Ingresar
                </Button>
              </div>
            </Form>
          </Card.Body>
          <Card.Footer className="texto_general">
            <div
              className="d-flex justify-content-center mx-auto "
              style={{ width: "40%" }}
            >
              <Button className="m-1 botonesIconos">
                <AiFillFacebook size="20" />
              </Button>

              <Button className="m-1 botonesIconos">
                <AiOutlineTwitter size="20" />
              </Button>

              <Button className="m-1 botonesIconos">
                <AiFillInstagram size="20" />
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Login;

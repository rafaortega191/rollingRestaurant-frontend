import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../common/Footer.jsx";
import logo from "../../assets/logo_navbar.png";

const Login = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    login(usuario).then((respuesta) => {
      
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
      <Container className="mainSection d-block align-items-center justify-content-center pb-3 my-3">
        <Card className="my-5">
          <Card.Header className="text-center titulo" as="h3">
          <a href="/">
              <Card.Img variant="top" src={logo} className="w-50" />
            </a>
            <Card.Title className="titulo">Iniciar Sesion</Card.Title>
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
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,100}$/,
                      message:
                        "La contraseña debe tener por lo menos 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                    },
                  })}
                  minLength={8}
                  maxLength={100}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <div className="d-flex justify-content-center row">
                <p>
                  No tienes cuenta? <Link to="/registro">Registrate Gratis</Link>.
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

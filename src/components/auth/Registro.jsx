import { signup } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Registro.css";

import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import {AiFillFacebook,AiOutlineTwitter,AiFillGoogleCircle,AiFillInstagram,} from "react-icons/ai";

const Registro = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario);

    signup(usuario).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        sessionStorage.setItem(
          "usuario",
          JSON.stringify(respuesta.nombreUsuario)
        );
        Swal.fire(
          "Bienvenido",
          `${respuesta.nombreUsuario} te registraste correctamente`,
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
    <Container className="mainSection d-block align-items-center justify-content-center p-3 my-5">
      <Card className="my-5">
        <Card.Header className="text-center titulo py-3" as="h3">
          Registro
        </Card.Header>
        <Card.Body className="texto_general">
          {/* <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El password es un dato obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "El password debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="botonIngresar" type="submit">
                Ingresar
              </Button>
            </div>
          </Form> */}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
            <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("nombre", {
                  required: "El nombre  es un dato obligatorio",
                })}
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
              />
            </Form.Group>
            <Form.Group className="mb-2">
            <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                  },
                })}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button className="botonIngresar px-3 my-3" type="submit">
                Registrar
              </Button>
            </div>

          </Form>
        </Card.Body>
        <Card.Footer className="texto_general">
          <div
            className="d-flex justify-content-center mx-auto "
            style={{ width: "40%" }}
          >
            <Button
              className="m-1 botonesIconos"
            >
              <AiFillFacebook size="20" />
            </Button>

            <Button
              className="m-1 botonesIconos"
            >
              <AiOutlineTwitter size="20" />
            </Button>

            <Button
              className="m-1 botonesIconos"
            >
              <AiFillInstagram size="20" />
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );

  return (
    <div className="mt-5 mainSection d-block align-items-center justify-content-center p-3 my-5">
      <h3 className="text-center titulo">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4 texto_general">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("nombre", {
                  required: "El nombre  es un dato obligatorio",
                })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
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
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "El password es un dato obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "El password debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                  },
                })}
              />
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;

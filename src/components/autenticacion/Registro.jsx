import { signup } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Registro.css";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomNav from "../common/CustomNav.jsx";
import Footer from "../common/Footer";
import bcrypt from 'bcryptjs';

const Registro = ({ setUsuarioLogeado }) => {
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
          JSON.stringify(respuesta.nombreUsuario)
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
      <CustomNav usuarioLogeado="" setUsuarioLogeado=""></CustomNav>

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
              <Form.Group className="mb-2">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese una contraseña"
                  {...register("password", {
                    required: "La contraseña es un dato obligatorio",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,100}$/                      ,
                      message:
                        "La contraseña debe tener por lo menos 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                    },
                  })}
                  minLength={8}
                  maxLength={100}
                />
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

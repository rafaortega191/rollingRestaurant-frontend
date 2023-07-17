import { Button, Form } from "react-bootstrap";
import { signup } from "../../helpers/queries";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
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

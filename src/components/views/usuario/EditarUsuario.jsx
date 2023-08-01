import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { consultaEditarUsuario, consultarUsuario } from "../../helpers/queries";
import Swal from "sweetalert2";


const EditarUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const {id} = useParams();
  const navegacion = useNavigate()

  useEffect(()=>{
    consultarUsuario(id).then((respuesta)=>{
      if(respuesta){
        setValue('email', respuesta.email);
        setValue('es_admin', respuesta.es_admin);
        setValue('nombre', respuesta.nombre);
      }else{
        Swal.fire('Ocurrio un error', `No se puede editar el usuario, intentelo mas tarde`, 'error');
      }
    })
  }, [])

  const onSubmit = (usuarioEditado) => {
    console.log(usuarioEditado);
   consultaEditarUsuario(usuarioEditado, id).then((respuesta)=>{
    if(respuesta && respuesta.status === 200){
      Swal.fire('Usuario editado', `El usuario ${usuarioEditado.nombre} fue editado correctamente`, 'success');
      navegacion('/administrador');
    }else{
      Swal.fire('Ocurrio un error', `El usuario ${usuarioEditado.nombre} no fue editado, intentelo mas tarde`, 'error');
    }
   })
  };

  return (
    <section className="container mainSection bg-white rounded-2">
      <h1 className="display-4 mt-5">Editar usuario</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Usuario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Yaya"
            {...register("nombre", {
              required: "El nombre del usuario es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: yaya@gmail.com"
            {...register("email", {
              required: "el email es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 caracteres",
              },
              maxLength: {
                value: 300,
                message: "La cantidad maxima de caracteres es de 2 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEsAdmin">
          <Form.Label>Es Admin?*</Form.Label>
          <Form.Select
            {...register("es_admin", {
              required: "La disponibilidad es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="true">Es Admin</option>
            <option value="false">No es Admin</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.es_admin?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarUsuario;
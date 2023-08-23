import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { consultaEditarPedido, consultaPedido } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarPedido = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    consultaPedido(id).then((respuesta) => {
      if (respuesta) {
        setValue("estado", respuesta.estado);
        setValue("usuario", respuesta.usuario);
        setValue("precioTotal", respuesta.precioTotal);
        setValue("fecha", respuesta.fecha);
        setValue("productos", respuesta.productos);
        setValue("_id", respuesta._id);
        
      } else {
        Swal.fire(
          "Ocurrio un error",
          `No se puede editar el pedido, intentelo mas tarde`,
          "error"
        );
      }
    });
  }, []);

  const onSubmit = (pedidoEditado) => {
    console.log(pedidoEditado);
    consultaEditarPedido(pedidoEditado, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto editado",
          `El producto fue editado correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto no fue editado, intentelo mas tarde`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection bg-white rounded-2">
      <h1 className="display-4 mt-5">Editar pedido</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formestado">
          <Form.Label>Disponibilidad*</Form.Label>
          <Form.Select
            {...register("estado", {
              required: "La disponibilidad es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="pendiente">pendiente</option>
            <option value="realizado">realizado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.estado?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsuario">
          <Form.Label>usuario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: usuario"
            {...register("usuario", {
              required: "el nombre de usuario es obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formfechaActual">
          <Form.Label>fecha de compra*</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ej: 00/00/0000"
            {...register("fecha", {
              required: "ingrese la fecha de compra, es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-2">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarPedido;

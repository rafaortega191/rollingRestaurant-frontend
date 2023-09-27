import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  consultaEditarProducto,
  consultaProducto,
} from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    consultaProducto(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombreProducto", respuesta.nombreProducto);
        setValue("precio", respuesta.precio);
        setValue("imagen", respuesta.imagen);
        setValue("categoria", respuesta.categoria);
        setValue("descripcion", respuesta.descripcion);
      } else {
        Swal.fire(
          "Ocurrio un error",
          `No se puede editar el producto, intentelo mas tarde`,
          "error"
        );
      }
    });
  }, []);

  const onSubmit = (productoEditado) => {
    consultaEditarProducto(productoEditado, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto editado",
          `El producto ${productoEditado.nombreProducto} fue editado correctamente`,
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El producto ${productoEditado.nombreProducto} no fue editado, intentelo mas tarde`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection bg-white rounded-2">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Fideos"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9\s]*$/,
                message:
                  "El nombre del producto solo puede contener letras, números y espacios.",
              },
              minLength: {
                value: 10,
                message: "Se requieren al menos 10 caracteres.",
              },
              maxLength: {
                value: 35,
                message: "Se permite un máximo de 35 caracteres.",
              },
              validate: (value) => {
                if (value.trim() !== value) {
                  return "El nombre del producto no puede empezar ni terminar con espacios en blanco.";
                }
                return true;
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 500"
            {...register("precio", {
              required: "El precio del producto es obligatorio y debe ser numerico",
              min: {
                value: 100,
                message: "El precio mínimo es de $100",
              },
              max: {
                value: 10000,
                message: "El precio máximo es de $10000",
              },
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Ingresa un valor positivo.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Fideos con salsa"
            {...register("descripcion", {
              required: "La descripción del producto es obligatoria",
              minLength: {
                value: 10,
                message: "Se requieren al menos 10 caracteres.",
              },
              maxLength: {
                value: 250,
                message: "Se permite un máximo de 250 caracteres.",
              },
              validate: (value) => {
                if (value.trim() !== value) {
                  return "El nombre del producto no puede empezar ni terminar con espacios en blanco.";
                }
                return true;
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/9617397/pexels-photo-9617397.jpg"
            {...register("imagen", {
              required:
                "La imagen es obligatoria y debe tener formato .jpg o .jpeg",
              pattern: {
                value: /^(https?:\/\/.*\.(jpg|jpeg))$/,
                message: "Ingresa un enlace válido con formato .jpg o .jpeg",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La imagen es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="sin tacc">Sin tacc</option>
            <option value="vegetariano">Vegetariano</option>
            <option value="vegano">Vegano</option>
            <option value="con carne">Con carne</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formestado">
          <Form.Label>Disponibilidad*</Form.Label>
          <Form.Select
            {...register("estado", {
              required: "La disponibilidad es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="disponible">Disponible</option>
            <option value="no disponible">No disponible</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.estado?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;

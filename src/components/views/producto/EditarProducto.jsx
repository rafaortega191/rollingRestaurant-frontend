import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { consultaEditarProducto, consultaProducto } from "../../helpers/queries";
import Swal from "sweetalert2";


const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const {id} = useParams();
  const navegacion = useNavigate()

  useEffect(()=>{
    consultaProducto(id).then((respuesta)=>{
      if(respuesta){
        setValue('nombreProducto', respuesta.nombreProducto);
        setValue('precio', respuesta.precio);
        setValue('imagen', respuesta.imagen);
        setValue('categoria', respuesta.categoria);
        setValue('descripcion', respuesta.descripcion);
      }else{
        Swal.fire('Ocurrio un error', `No se puede editar el producto, intentelo mas tarde`, 'error');
      }
    })
  }, [])

  const onSubmit = (productoEditado) => {
    console.log(productoEditado);
   consultaEditarProducto(productoEditado,id).then((respuesta)=>{
    if(respuesta && respuesta.status === 200){
      Swal.fire('Producto editado', `El producto ${productoEditado.nombreProducto} fue editado correctamente`, 'success');
      navegacion('/administrador');
    }else{
      Swal.fire('Ocurrio un error', `El producto ${productoEditado.nombreProducto} no fue editado, intentelo mas tarde`, 'error');
    }
   })
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
            placeholder="Ej: Fideos con salsa"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 10,
                message: "Se requieren al menos 10 caracteres.",
              },
              maxLength: {
                value: 75,
                message: "Se permite un máximo de 75 caracteres..",
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
            placeholder="Ej: 1500"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 100,
                message: "El precio minimo es de $100",
              },
              max: {
                value: 10000,
                message: "El precio maximo es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: café torrado"
            {...register("descripcion", {
              required: "la descripcion del producto es obligatoria",
              minLength: {
                value: 10,
                message: "Se requieren al menos 10 caracteres.",
              },
              maxLength: {
                value: 250,
                message: "Se permite un máximo de 250 caracteres.",
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
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
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
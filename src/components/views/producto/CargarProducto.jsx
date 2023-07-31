import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultaBorrarProducto, consultaListaProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";

const CargarProducto = ({producto, setProductos}) => {

  const borrarProducto = ()=>{
    Swal.fire({
      title: `¿Estas seguro ${producto.nombreProducto}?`,
      text: "Esto se borrara para siempre!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        //borrar el producto de la api
        consultaBorrarProducto(producto._id).then((respuesta)=>{
          console.log(respuesta);
          if(respuesta.status === 200){
            Swal.fire(
              'Producto Eliminado!',
              `El ${producto.nombreProducto} fue eliminado correctamente`,
              'success'
            );
            //actualizar la table de productos
            consultaListaProductos().then((respuesta)=>setProductos(respuesta))
          }else{
            Swal.fire(
              'Ocurrio un error!',
              `intente realizar esto mas tarde`,
              'error'
            )
          }
        })
      }
    })
  }

   return (
    <tr>
      {/* <td>{props.producto._id}</td> */}
      <td>{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.categoria}</td>
      <td>{producto.imagen}</td>
      <td>
        <Link className="btn btn-warning" to={'/administrador/editarproducto/'+producto._id}>Editar</Link>
        <Button className="m-2" variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
      <td>{producto.descripcion}</td>
      <td>{producto.estado}</td>
    </tr>
  );
};

export default CargarProducto;

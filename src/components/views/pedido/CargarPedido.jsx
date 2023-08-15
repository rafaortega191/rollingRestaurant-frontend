import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultaBorrarPedido, consultaListaPedidos} from "../../helpers/queries";
import { Link } from "react-router-dom";

const CargarPedido = ({pedido, setPedidos}) => {

  const borrarPedido = ()=>{
    Swal.fire({
      title: `¿Estas seguro ${pedido.nombreProducto}?`,
      text: "Esto se borrara para siempre!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        //borrar el pedido de la api
        consultaBorrarPedido(pedido._id).then((respuesta)=>{
          console.log(respuesta);
          if(respuesta.status === 200){
            Swal.fire(
              'pedido Eliminado!',
              `El ${pedido.nombrepedido} fue eliminado correctamente`,
              'success'
            );
            //actualizar la table de pedidos
            consultaListaPedidos().then((respuesta)=>setPedidos(respuesta))
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
      {/* <td>{props.pedido._id}</td> */}
      <td>{pedido.nombreProducto}</td>
      <td>${pedido.precio}</td>
      <td>{pedido.categoria}</td>
      <td>{pedido.imagen}</td>
      <td>
        <Link className="btn btn-warning" to={'/administrador/usuarios/editarpedido/'+pedido._id}>Editar</Link>
        <Button className="m-2" variant="danger" onClick={borrarPedido}>
          Borrar
        </Button>
      </td>
      <td>{pedido.descripcion}</td>
      <td>{pedido.estado}</td>
      <td>{pedido.nombreUsuario}</td>
      <td>{pedido.cantidad}</td>
      <td>{pedido.precioTotal}</td>
      <td>{pedido.fechaActual}</td>
    </tr>
  );
};

export default CargarPedido;

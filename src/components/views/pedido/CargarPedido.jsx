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
              `El Pedido fue eliminado correctamente`,
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
      <td>
        <Link className="btn btn-warning" to={'/administrador/usuarios/editarpedido/'+pedido._id}>Editar</Link>
        <Button className="m-2" variant="danger" onClick={borrarPedido}>
          Borrar
        </Button>
      </td>
      <td>{pedido.fecha}</td>
      <td>{pedido.estado}</td>
      <td>{pedido.usuario}</td>
    </tr>
  );
};

export default CargarPedido;

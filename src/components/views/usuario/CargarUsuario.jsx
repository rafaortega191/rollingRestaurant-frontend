import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  consultaBorrarUsuario,
  consultaListaUsuarios,
} from "../../helpers/queries";
import { Link } from "react-router-dom";

const CargarUsuario = ({ usuario, setUsuarios }) => {
  const borrarUsuario = () => {
    Swal.fire({
      title: `¿Estas seguro ${usuario.nombre}?`,
      text: "Esto se borrara para siempre!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarUsuario(usuario._id).then((respuesta) => {
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "Usuario Eliminado!",
              `El ${usuario.nombre} fue eliminado correctamente`,
              "success"
            );
            //actualizar la table de productos
            consultaListaUsuarios().then((respuesta) => setUsuarios(respuesta));
          } else {
            Swal.fire(
              "Ocurrio un error!",
              `intente realizar esto mas tarde`,
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      {/* <td>{props.producto._id}</td> */}
      <td>{usuario.email}</td>
      <td>{usuario.es_admin ? "Si" : "No"}</td>
      <td>{usuario.nombre}</td>
      <td>
        <Link
          className="btn btn-warning"
          to={"/administrador/usuarios/editarusuario/" + usuario._id}
        >
          Editar
        </Link>
        <Button className="m-2" variant="danger" onClick={borrarUsuario}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default CargarUsuario;

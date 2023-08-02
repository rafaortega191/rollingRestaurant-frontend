import { Routes, Route} from "react-router-dom";
import Administrador from "../views/Administrador";
import EditarUsuario from "../views/usuario/EditarUsuario";
import EditarPedido from "../views/pedido/EditarPedido";


const RutasDelUsuario = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Administrador></Administrador>}></Route>
                <Route exact path="/editarusuario/:id" element={<EditarUsuario></EditarUsuario>}></Route>
                <Route exact path="/editarpedido/:id" element={<EditarPedido></EditarPedido>}></Route>
                
            </Routes>
        </>
    );
};

export default RutasDelUsuario;
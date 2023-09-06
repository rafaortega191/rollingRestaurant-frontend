import { Routes, Route} from "react-router-dom";
import EditarUsuario from "../views/usuario/EditarUsuario";
import EditarPedido from "../views/pedido/EditarPedido";
import Error404 from "../views/Error404";


const RutasDelUsuario = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Error404></Error404>}></Route>
                <Route exact path="/editarusuario/:id" element={<EditarUsuario></EditarUsuario>}></Route>
                <Route exact path="/editarpedido/:id" element={<EditarPedido></EditarPedido>}></Route>
                <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>
        </>
    );
};

export default RutasDelUsuario;
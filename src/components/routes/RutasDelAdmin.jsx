import { Routes, Route} from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";

const RutasDelAdmin = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Administrador></Administrador>}></Route>
                <Route exact path="/crearproducto" element={<CrearProducto></CrearProducto>}></Route>
                <Route exact path="/editarproducto/:id" element={<EditarProducto></EditarProducto>}></Route>
                
            </Routes>
        </>
    );
};

export default RutasDelAdmin;
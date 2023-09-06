import { Routes, Route} from "react-router-dom";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import Error404 from "../views/Error404";

const RutasDelAdmin = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Error404></Error404>}></Route>
                <Route exact path="/crearproducto" element={<CrearProducto></CrearProducto>}></Route>
                <Route exact path="/editarproducto/:id" element={<EditarProducto></EditarProducto>}></Route>
                <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>
        </>
    );
};

export default RutasDelAdmin;
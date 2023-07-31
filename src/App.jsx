import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Acercadenosotros from "./components/views/Acercadenosotros";
import Administrador from "./components/views/Administrador";
import Login from "./components/autenticacion/Login.jsx";
import Registro from "./components/autenticacion/Registro.jsx";
import { useState } from "react";
import ErrorPage from "./components/views/Error404";
import RutasDelAdmin from "./components/routes/RutasDelAdmin";
import ProductoDetalles from "./components/views/pageDetalle";
import Inicio from "./components/views/Inicio";
import Pedidos from "./components/views/Pedidos";
import FormularioDetalle from "./components/views/detalle/FormularioDetalle";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  const router = createBrowserRouter([
    {
      path: "/administrador",
      element: <Administrador />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login setUsuarioLogueado={setUsuarioLogueado}></Login>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/registro",
      element: <Registro setUsuarioLogueado={setUsuarioLogueado} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/administrador/*",
      element: <RutasDelAdmin setUsuarioLogueado={setUsuarioLogueado} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/acercadenosotros",
      element: <Acercadenosotros />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/detalles",
      element: <ProductoDetalles />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/pedidos",
      element: <Pedidos />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/pedidos/:id",
      element: <Pedidos />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Inicio />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/FormularioDetalle/:id",
      element: <FormularioDetalle />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

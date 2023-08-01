import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  // const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};

  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  const router = createBrowserRouter([
    {
      path: "/administrador",
      element: (
        <Administrador
          usuarioLogeado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      ),
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
      element: (
        <RutasDelAdmin
          usuarioLogeado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/acercadenosotros",
      element: (
        <Acercadenosotros
          usuarioLogeado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/detalles/:id",
      element: (
        <ProductoDetalles
          usuarioLogeado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/pedidos",
      element: (
        <Pedidos
          usuarioLogeado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/pedidos/:id",
      element: (
        <Pedidos
          usuarioLogeado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: (
        <Inicio
          usuarioLogeado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      ),
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

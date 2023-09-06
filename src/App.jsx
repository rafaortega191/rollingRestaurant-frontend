import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Acercadenosotros from "./components/views/Acercadenosotros";
import Administrador from "./components/views/Administrador";
import Login from "./components/autenticacion/Login.jsx";
import Registro from "./components/autenticacion/Registro.jsx";
import ErrorPage from "./components/views/Error404";
import RutasDelAdmin from "./components/routes/RutasDelAdmin";
import ProductoDetalles from "./components/views/pageDetalle";
import Inicio from "./components/views/Inicio";
import Pedidos from "./components/views/Pedidos";
import RutasDelUsuario from "./components/routes/RutasDelUsuario";
import RutasProtegidas from "./components/routes/RutasProtegidas";

function App() {
  const [usuarioLogeado, setUsuarioLogeado] = useState(null);

  useEffect(() => {
    const usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario"));
    if (usuarioGuardado) {
      setUsuarioLogeado(usuarioGuardado);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/administrador",
      element: (
        <RutasProtegidas>
          <Administrador
            usuarioLogeado={usuarioLogeado}
            setUsuarioLogeado={setUsuarioLogeado}
          />
        </RutasProtegidas>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <Login
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        ></Login>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/registro",
      element: <Registro setUsuarioLogeado={setUsuarioLogeado} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/administrador/productos/*",
      element: (
        <RutasProtegidas>
          <RutasDelAdmin
            usuarioLogeado={usuarioLogeado}
            setUsuarioLogeado={setUsuarioLogeado}
          />
        </RutasProtegidas>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/administrador/usuarios/*",
      element: (
        <RutasProtegidas>
          <RutasDelUsuario
            usuarioLogeado={usuarioLogeado}
            setUsuarioLogeado={setUsuarioLogeado}
          />
        </RutasProtegidas>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/acercadenosotros",
      element: (
        <Acercadenosotros
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/detalles/:id",
      element: (
        <ProductoDetalles
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/pedidos",
      element: (
        <Pedidos
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: (
        <Inicio
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
      ),
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

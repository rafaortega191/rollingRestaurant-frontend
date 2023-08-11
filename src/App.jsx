import React,{useEffect,useState} from "react"
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
import FormularioDetalle from "./components/views/detalle/FormularioDetalle";
import RutasDelUsuario from "./components/routes/RutasDelUsuario";


function App() {
  // const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};


  const [usuarioLogeado, setUsuarioLogeado] = useState(null);

 /*  useEffect(()=>{
    
    setUsuarioLogeado({
      "email":"prueba2@gmail.com",
      "password":"Prueba_123!",
      "nombreUsuario":"Euge",
      "es_admin":true})
  },[]) */
  

  const router = createBrowserRouter([
    {
      path: "/administrador",
      element: (
        <Administrador
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></Login>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element:  <Inicio
      usuarioLogeado={usuarioLogeado}
      setUsuarioLogeado={setUsuarioLogeado}
    />,
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
        <RutasDelAdmin
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/administrador/usuarios/*",
      element: (
        <RutasDelUsuario
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        />
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
      path: "/pedidos/:id",
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

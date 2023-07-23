import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Acercadenosotros from './components/views/Acercadenosotros'
import RutasDelAdmin from './components/routes/RutasDelAdmin'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Administrador from "./components/views/Administrador";
import Login from "./components/auth/Login.jsx";
import Registro from "./components/auth/Registro.jsx";
import { useState } from "react";
import ErrorPage from "./components/views/Error-page.jsx"


function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}; 
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  const router = createBrowserRouter([
    {
      path: "/administrador",
      element: <Administrador />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signin",
      element: <Login setUsuarioLogueado={setUsuarioLogueado}></Login>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Administrador />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <Registro setUsuarioLogueado={setUsuarioLogueado} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/acercadenosotros" element={<Acercadenosotros></Acercadenosotros>}></Route>
        <Route path="/administrador/*" element={<RutasDelAdmin></RutasDelAdmin>}></Route>
        </Routes>
      </BrowserRouter>

      <RouterProvider router={router} />

    </>
  );
}

export default App;

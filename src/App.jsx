import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Administrador from './components/views/Administrador'
import Acercadenosotros from './components/views/Acercadenosotros'
import RutasDelAdmin from './components/routes/RutasDelAdmin'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/acercadenosotros" element={<Acercadenosotros></Acercadenosotros>}></Route>
        <Route path="/administrador/*" element={<RutasDelAdmin></RutasDelAdmin>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

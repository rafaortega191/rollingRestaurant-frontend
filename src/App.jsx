import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Administrador from './components/views/Administrador'
import Acercadenosotros from './components/views/Acercadenosotros'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/acercadenosotros" element={<Acercadenosotros></Acercadenosotros>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

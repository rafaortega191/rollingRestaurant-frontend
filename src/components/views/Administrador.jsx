import { Table } from "react-bootstrap-icons";
import React from 'react';
import { Link } from "react-router-dom";

const Administrador = () => {
    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Link className="btn btn-primary" to='/administrador/crearproducto'>Agregar</Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Estado</th>
              <th>Precio</th>
              <th>Detalles</th>
              <th>Categoria</th>
              <th>URL de Imagen</th>
            </tr>
          </thead>
          <tbody>
            {
              //productos.map((producto)=> <ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto>)
            }
           </tbody>
        </Table>
        <br />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Email</th>
              <th>Password</th>
              <th>Estado</th>
              <th>perfil</th>
            </tr>
          </thead>
          <tbody>
            {
              //productos.map((producto)=> <ItemUsuario key={producto._id} producto={producto} setProductos={setProductos}></ItemUsuario>)
            }
           </tbody>
        </Table>
        <br />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Productos del menu</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              //productos.map((producto)=> <ItemUsuario key={producto._id} producto={producto} setProductos={setProductos}></ItemUsuario>)
            }
           </tbody>
        </Table>
      </section>
    );
};

export default Administrador;
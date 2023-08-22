import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './acercadenosotros.css'
import CustomNav from '../common/CustomNav.jsx';
import rafa from "../../assets/rafa.png"
import gero from "../../assets/gero.jpg"
import euge from "../../assets/euge.jpg"
import emanuel from "../../assets/emanuel.png"
import Footer from '../common/Footer.jsx';


const Acercadenosotros = ({usuarioLogeado, setUsuarioLogeado}) => {
  const Card = ({ imagenSrc, titulo, descripcion }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
      <div className="card card-acercadenosotros container">
        <img src={imagenSrc} alt="Imagen de la tarjeta"/>
        <h2>{titulo}</h2>
        <div>
          {/* Button to open the modal */}
          <button className="btn btn-white" onClick={openModal}>
            Mas Informacion
          </button>
        </div>
        <div className="content container d-flex align-items-end icono-tamaño mt-4">
          
          {/* Modal structure */}
          {showModal && (
            <>
              {/* Modal backdrop */}
              <div className="modal-backdrop show" onClick={closeModal} />
              <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{titulo}</h5>
                      <button type="button" className="btn-close" onClick={closeModal} />
                    </div>
                    <div className="modal-body">
                      <p>{descripcion}</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={closeModal}>
                        cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

    return (
        <div className=''>
          <CustomNav usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></CustomNav>
          <h1 className='text-center mt-2 h1-acercadenosotros pt-3'>Nuestro Equipo</h1>
          <hr className='m-4'/>
          <div className="card-acercadenosotros-container rounded-4 ">
            <Card
              imagenSrc={rafa}
              titulo="Ortega Rafael"
              descripcion="Maquetado del administrador de productos, compra y la pagina de acerca de nosotros"
            />
            <Card
              imagenSrc={gero}
              titulo="Cossio Geronimo"
              descripcion="maquetado de la pagina principal y el error 404"
            />
            <Card
              imagenSrc={euge}
              titulo="Cáceres Eugenia"
              descripcion="maquetado del navbar, footer, detalles, del login y registro"
            />
            <Card
              imagenSrc={emanuel}
              titulo="Flores Emanuel"
              descripcion="maquetado de readme"
            />
          </div>
          <br />
        <Footer/>
        </div>
      );
};

export default Acercadenosotros;
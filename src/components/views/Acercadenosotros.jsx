import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './acercadenosotros.css'
import auto from '../../assets/auto.jpg'


const Acercadenosotros = () => {

    const Card = ({ imagenSrc, titulo, description }) => {
        return (
          <div className="card-acercadenosotros">
            <img src={imagenSrc} alt="Imagen de la tarjeta" />
            <h2>{titulo}</h2>
            <p>{description}</p>
          </div>
        );
      };

    return (
        <div className='Acercadenosotros-fondo'>
          <h1 className='text-center mt-2 text-white h1-acercadenosotros'>Nuestro Equipo</h1>
          <hr className='m-4 text-white'/>
          <div className="card-acercadenosotros-container rounded-4">
            <Card
              imagenSrc={auto}
              titulo="Título de la tarjeta"
              description="Descripción de la tarjeta 1"
            />
            <Card
              imagenSrc={auto}
              titulo="Título de la tarjeta 2"
              description="Descripción de la tarjeta 2"
            />
            <Card
              imagenSrc={auto}
              titulo="Título de la tarjeta 3"
              description="Descripción de la tarjeta 3"
            />
            <Card
              imagenSrc={auto}
              titulo="Título de la tarjeta 4"
              description="Descripción de la tarjeta 4"
            />
          </div>
          <br />
        </div>
      );
};

export default Acercadenosotros;
import { Col, Card } from "react-bootstrap";

import { Link,useNavigate} from "react-router-dom";
import React from "react";
import "../paginaprincipal.css";

const CardProducto = ({ user,producto }) => {
  const navigate = useNavigate();
  console.log(user)
  const handleComprarClick = () => {
    if(user===null){
      navigate("/login")
    }else{  
      const productoJSON = JSON.stringify(producto);
      const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados")) || [];
      productosSeleccionados.push(producto);
      localStorage.setItem("productosSeleccionados", JSON.stringify(productosSeleccionados));
      navigate(`/pedidos/${producto._id}`)
    }
    
  };
  

  return (
    <Col md={3} ld={2} className="mb-3">
      <Card className="card-principal-seleccionados">
        <Card.Img className="imagen-card-seleccionadas" variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title className="card-productos-titulo">{producto.nombreProducto}</Card.Title>
          <Card.Text className="card-productos-precio">${producto.precio}</Card.Text>
          <Link
            className="btn card-productos-boton-sabermas"
            to={`/detalles/${producto._id}`}
          >
            Ver más
          </Link>
          <Link
            className="btn card-productos-boton-sabermas"
            onClick={handleComprarClick} // Llamamos a la función al hacer clic en el botón "Comprar"
          >
            Comprar
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;

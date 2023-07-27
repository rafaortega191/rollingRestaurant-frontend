import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailles = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div>
      <h2>{product.nombre}</h2>
      <p>Estado: {product.estado}</p>
      <p>Precio: ${product.precio}</p>
      <p>Detalle: {product.detalle}</p>
      <p>Categoría: {product.categoria}</p>
      <img src={product.imagen} alt={product.nombre} />
    </div>
  );
};

export default ProductDetailles;
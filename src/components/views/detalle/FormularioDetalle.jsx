import React, { useState } from "react";

import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const FormularioDetalle = ({ nombre_producto, id_producto }) => {
  const [selectedSauce, setSelectedSauce] = useState("Small");
  const [quantity, setQuantity] = useState("1");

  const handleSauceChange = (event) => {
    setSelectedSauce(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    
    
    //
  };

  return (
    <div></div>
  );
};

export default FormularioDetalle;

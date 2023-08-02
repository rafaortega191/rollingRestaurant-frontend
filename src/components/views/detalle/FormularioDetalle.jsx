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
    console.log("Salsa seleccionada:", selectedSauce);
    console.log("Cantidad:", quantity);
    console.log("Producto en curso:", nombre_producto);
    console.log("ID Producto en curso:", id_producto);
    //
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-4">
        <div className="col-md-4 col-6">
          <label className="mb-2">Salsas</label>
          <select
            className="form-select border border-secondary"
            style={{ height: "35px" }}
            value={selectedSauce}
            onChange={handleSauceChange}
          >
            <option value="Roja">Roja</option>
            <option value="Blanca">Blanca</option>
            <option value="Mixta">Mixta</option>
          </select>
        </div>
        <div className="col-md-4 col-6 mb-3">
          <label className="mb-2 d-block">Cantidad</label>
          <div className="input-group mb-3" style={{ width: "170px" }}>
            <button
              className="btn btn-white border border-secondary px-3"
              type="button"
              id="button-addon1"
              data-mdb-ripple-color="dark"
              onClick={() =>
                setQuantity((prevQuantity) =>
                  String(parseInt(prevQuantity) - 1)
                )
              }
            >
              <AiOutlineMinus/>
            </button>
            <input
              type="text"
              className="form-control text-center border border-secondary"
              placeholder="14"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="btn btn-white border border-secondary px-3"
              type="button"
              id="button-addon2"
              data-mdb-ripple-color="dark"
              onClick={() =>
                setQuantity((prevQuantity) =>
                  String(parseInt(prevQuantity) + 1)
                )
              }
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary shadow-0">
        <i className="me-1 fa fa-shopping-basket"></i> Agregar al Pedido
      </button>
    </form>
  );
};

export default FormularioDetalle;

const URLProductos = import.meta.env.VITE_API_PRODUCTO;
const URLPedidos = import.meta.env.VITE_API_PEDIDOS;


export const consultaListaProductos = async () => {
    try{
        const respuesta = await fetch(URLProductos);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error);
    }

}

export const consultaBorrarProducto = async (id) => {
    try{
        const respuesta = await fetch(`${URLProductos}/${id}`,{
            method: "DELETE"
        });
            return respuesta;  

    }catch(error){
        console.log(error);
    }
}

export const consultaAgregarProducto = async (producto) =>{
    try{
        const respuesta = await fetch(URLProductos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

export const consultaEditarProducto = async (producto, id) =>{
    try{
        const respuesta = await fetch(URLProductos+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

export const consultaProducto = async (id) =>{
    try{
        const respuesta = await fetch(URLProductos+'/'+id);
        const producto = await respuesta.json();
        return producto;
    }catch(error){
        console.log(error);
    }
}

export const consultaAgregarPedido = async (pedido) => {
    try {
      const respuesta = await fetch(URLPedidos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedido),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
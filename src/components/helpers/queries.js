const URLProductos = import.meta.env.VITE_API_PRODUCTO;
const URLPedidos = import.meta.env.VITE_API_PEDIDOS;
const URLUsuarios = import.meta.env.VITE_API_USUARIOS;

export const consultaListaUsuarios = async () => {
    try{
        const respuesta = await fetch(URLUsuarios);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    }catch(error){
        console.log(error);
    }

}

export const consultaListaProductos = async () => {
    try{
        const respuesta = await fetch(URLProductos);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error);
    }

}

export const consultaBorrarUsuario = async (id) => {
    try{
        const respuesta = await fetch(`${URLUsuarios}/${id}`,{
            method: "DELETE"
        });
            return respuesta;  

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

export const consultaEditarUsuario = async (usuario, id) =>{
    try{
        const respuesta = await fetch(URLUsuarios+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
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

export const consultarUsuario = async (id) =>{
    try{
        const respuesta = await fetch(URLUsuarios+'/'+id);
        const usuario = await respuesta.json();
        return usuario;
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
  
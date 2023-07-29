export const login = async (usuario) => {
  // try{
  //     const respuesta = await fetch(URLUsuario,{
  //         method: "POST",
  //         headers:{
  //             "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(usuario)
  //     });
  //     const datos = await respuesta.json();
  //     return {
  //         status: respuesta.status,
  //         nombreUsuario: datos.nombreUsuario
  //     }

  // }catch(error){
  //     console.log(error)
  // }
  return {
    status: 200,
    nombreUsuario: "yaya",
    isAdmin: false,
  };
};

export const signup = async (usuario) => {
  // try{
  //     const respuesta = await fetch(URLUsuario,{
  //         method: "POST",
  //         headers:{
  //             "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify(usuario)
  //     });
  //     const datos = await respuesta.json();
  //     return {
  //         status: respuesta.status,
  //         nombreUsuario: datos.nombreUsuario
  //     }

  // }catch(error){
  //     console.log(error)
  // }
  return {
    status: 200,
    nombreUsuario: usuario.nombre,
  };
};

const SECRET_KEY = import.meta.env.API_SECRET;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch("https://rolling-restaurant-backend.vercel.app/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    const datos = await respuesta.json();

    if (respuesta.status === 200) {
      // Si el login es exitoso, almacenamos el token en el cliente y retornamos los datos.
      const token = datos.token;

      return {
        status: respuesta.status,
        nombreUsuario: datos.nombre,
        es_admin: datos.es_admin,
        token: token,
      };
    } else {
      // En caso de que el login falle, puedes manejar el error adecuadamente.
      return {
        status: respuesta.status,
        error: datos.message,
      };
    }
  } catch (error) {
    
    return {
      status: 500,
      error: "Error en el servidor",
    };
  }
};

export const signup = async (usuario) => {
  try {
    const respuesta = await fetch("https://rolling-restaurant-backend.vercel.app/user/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    const datos = await respuesta.json();

    if (respuesta.status === 201) {
      return {
        status: respuesta.status,
        nombreUsuario: datos.nombre,
        es_admin: datos.es_admin,
      };
    } else {
      // En caso de que el registro falle, puedes manejar el error adecuadamente.
      return {
        status: respuesta.status,
        error: datos.message,
      };
    }
  } catch (error) {
    
    return {
      status: 500,
      error: "Error en el servidor",
    };
  }
};

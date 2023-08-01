import jwt from 'jsonwebtoken';

const SECRET_KEY = 'TODO_CAMBIAR_ESTE_SECRET';

export const login = async (usuario) => {
  try {
    const respuesta = await fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });

    const datos = await respuesta.json();

    if (respuesta.status === 200) {
      // Si el login es exitoso, almacenamos el token en el cliente y retornamos los datos.
      const token = datos.token;
      const decodedToken = jwt.verify(token, SECRET_KEY);
      
      return {
        status: respuesta.status,
        nombreUsuario: decodedToken.nombreUsuario,
        token: token
      };
    } else {
      // En caso de que el login falle, puedes manejar el error adecuadamente.
      return {
        status: respuesta.status,
        error: datos.message
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      error: 'Error en el servidor'
    };
  }
};

export const signup = async (usuario) => {
  try {
    const respuesta = await fetch('http://localhost:4000/user/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });

    const datos = await respuesta.json();

    if (respuesta.status === 200) {
      
      const token = datos.token;
      const decodedToken = jwt.verify(token, SECRET_KEY);

      return {
        status: respuesta.status,
        nombreUsuario: decodedToken.nombreUsuario,
        token: token
      };
    } else {
      // En caso de que el registro falle, puedes manejar el error adecuadamente.
      return {
        status: respuesta.status,
        error: datos.message
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      error: 'Error en el servidor'
    };
  }
};

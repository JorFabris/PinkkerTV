export default {
  login: {
    inputs: {
      email: 'Correo electronico',
      password: 'Contraseña'
    },
    button: "Iniciar sesión",
    forgotPassword: "¿Olvidaste tu contraseña?",
    register: "¿No tenes cuenta? Registrate acá",
    errors: {
      email: {
        valid: 'El email tiene que ser válido',
        required: 'El email es necesario'
      },
      password: {
        min: 'La contraseña es invalida',
        required: 'La contraseña es necesaria'
      }
    }
  },
  register: {
    header: "Registrate",
    button: "Registrarme",
    inputs: {
      email: 'Correo electronico',
      username: 'Usuario',
      birthday: 'Fecha de nacimiento',
      password: 'Contraseña',
      rePassword: 'Repetir contraseña'
    },
    errors: {
      email: {
        valid: 'El email tiene que ser válido',
        required: 'El email es requerido'
      },
      username: {
        min: 'El usuario debe tener 2 o más caracteres',
        required: 'El usuario es requerido'
      },
      password: {
        min: 'La contraseña debe contener 8 caracteres',
        required: 'La contraseña es requerida'
      },
      rePassword: {
        required: 'La contraseña es requerida',
        coincidence: 'Las contraseñas no coinciden'
      }
    }
  },
  tabs: {
    following: 'Siguiendo',
    discover: 'Descubrir',
    browse: 'Explorar',
    search: 'Buscar'
  },
  home: {

  },
};

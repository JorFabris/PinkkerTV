export default {
  login: {
    inputs: {
      email: 'Correo electronico',
      password: 'Contraseña',
    },
    button: 'Iniciar sesión',
    forgotPassword: '¿Olvidaste tu contraseña?',
    register: '¿No tenes cuenta? Registrate acá',
    errors: {
      email: {
        valid: 'El email tiene que ser válido',
        required: 'El email es necesario',
      },
      password: {
        min: 'La contraseña es invalida',
        required: 'La contraseña es necesaria',
      },
    },
  },
  register: {
    header: 'Registrate',
    button: 'Registrarme',
    inputs: {
      email: 'Correo electronico',
      username: 'Usuario',
      birthday: 'Fecha de nacimiento',
      password: 'Contraseña',
      rePassword: 'Repetir contraseña',
    },
    errors: {
      email: {
        valid: 'El email tiene que ser válido',
        required: 'El email es requerido',
      },
      username: {
        min: 'El usuario debe tener 2 o más caracteres',
        required: 'El usuario es requerido',
      },
      password: {
        min: 'La contraseña debe contener 8 caracteres',
        required: 'La contraseña es requerida',
      },
      rePassword: {
        required: 'La contraseña es requerida',
        coincidence: 'Las contraseñas no coinciden',
      },
    },
  },
  watch: {
    tabs: {
      following: 'Siguiendo',
      discover: 'Descubrir',
      browse: 'Explorar',
      search: 'Buscar',
    },
    home: {
      turnOn: 'Prender',
      title: 'Tus canales en vivo',
    },
    search: {
      placeholder: 'Buscar...',
    },
    explore: {
      selectors: {
        categories: 'Categorías',
        live: 'En vivo',
      },
    },
    discover: {
      categories: {
        games: 'Juegos',
        irl: 'IRL',
        esports: 'Esports',
        music: 'Musica',
        creative: 'Creatividad',
      },
    },
    inbox: {
      title: 'Susurros',
      emptyState: 'No tenes susurros todavía',
    },
    notifications: {
      title: 'Notificaciones',
      emptyState: 'No tenes notificaciones todavía',
    },
  },

  goLive: {
    tabs: {
      home: 'Inicio',
      content: 'Contenido',
      analitycs: 'Analiticas',
    },
    home: {
      title: 'Inicio',
      watch: 'Mirar',
      online: 'En vivo',
      stream: 'Stream',
      duration: 'Duración',
      viewers: 'Viewers',
      followers: 'Seguidores',
      offline: 'Sin conexión',
      streamManager: 'Gestor de vivo',
      editStreamInfo: 'Editar info del vivo',
      subtitle: 'Utiliza el Gestor de vivo para monitoriar tu Chat, Actividad Reciente y más',
      emptyStateTitle: 'Esta calmo. Muy calmo...',
      emptyStateSubtitle: 'Te mostraremos tus nuevos seguidores, Subs, cheers, Raids y tu actividad aquí.',
      seeAllActivity: 'Ver toda la actividad',
      FAButton: {
        on: 'Prender',
        off: 'Apagar',
      },
    },
    content: {
      title: 'Contenido',
      emptyState: 'No tienes clips de tu canal.',
    },
    analitycs: {
      title: 'Analiticas',
      emptyState: 'No tienes analiticas de tu canal.',
    },
  },
};

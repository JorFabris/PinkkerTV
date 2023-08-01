import * as Yup from 'yup';

const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().email('El email tiene que ser válido').required('El email es necesario'),
    password: Yup.string()
      .min(8, 'La contraseña es invalida')
      .required('La contraseña es necesaria')
  });


  export default LoginValidationSchema;
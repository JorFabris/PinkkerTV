import * as Yup from 'yup';

const RegisterValidationSchema = Yup.object().shape({
    email: Yup.string().email('El email tiene que ser válido').required('El email o el usuario son requeridos'),
    username: Yup.string().min(2, 'El usuario debe tener 2 o más caracteres').required('El usuario es requerido'),
    birthday: Yup.date().required('La fecha de cumpleaños es requerida'),
    password: Yup.string()
    .min(8, 'La contraseña es invalida')
    .required('La contraseña es requerida'),
    rePassword:  Yup.string()
    .required('La contraseña es requerida')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
  });


  export default RegisterValidationSchema;
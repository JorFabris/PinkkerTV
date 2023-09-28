import * as Yup from 'yup';
import { getText } from '../../../../i18n/manageLocales';

const RegisterValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(getText().register.errors.email.valid)
    .required(getText().register.errors.email.required),
  username: Yup.string()
    .min(2, getText().register.errors.username.min)
    .required(getText().register.errors.username.required),
  password: Yup.string()
    .min(8, getText().register.errors.password.min)
    .required(getText().register.errors.password.required),
  rePassword: Yup.string()
    .required(getText().register.errors.rePassword.required)
    .oneOf([Yup.ref('password')], getText().register.errors.rePassword.coincidence),
});


export default RegisterValidationSchema;

import * as Yup from 'yup';
import { getText } from '../../../../i18n/manageLocales';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(getText().login.errors.email.valid)
    .required(getText().login.errors.email.required),
  password: Yup.string()
    .min(8, getText().login.errors.password.min)
    .required(getText().login.errors.password.required)
});


export default LoginValidationSchema;
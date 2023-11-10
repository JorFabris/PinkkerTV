import * as Yup from 'yup';
import { getText } from '../../../../i18n/manageLocales';

const LoginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, getText().login.errors.username.valid)
    .required(getText().login.errors.username.required),
  password: Yup.string()
    .min(8, getText().login.errors.password.min)
    .required(getText().login.errors.password.required),
});


export default LoginValidationSchema;

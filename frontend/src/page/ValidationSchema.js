import * as Yup from 'yup';
import { REGEX_PASSWORD } from '../utils/password';

const reGexPassword = REGEX_PASSWORD;

export const validationSchema = Yup.object({
  firstName: Yup.string().min(2, 'Mininum 2 characters').max(15, 'Maximum 15 characters').required('Required!'),
  lastName: Yup.string().min(2, 'Mininum 2 characters').max(15, 'Maximum 15 characters').required('Required!'),
  username: Yup.string().min(2, 'Mininum 2 characters').max(15, 'Maximum 15 characters').required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  address: Yup.string().required('Required!'),
  phoneNumber: Yup.string().required('Required!'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('Required!')
    .matches(reGexPassword, 'UpperCase, characters, number'),
});

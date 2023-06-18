import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { register } from 'redux/auth/operations';
import {
  Field,
  Form,
  FormButton,
  FormField,
  FormLabel,
  ErrorMessage,
  LabelText,
} from '../ContactForm/ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    )
    .min(2, 'Too short!')
    .max(40, 'Too long!')
    .required('Name is a required field!'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required field!'),
  password: yup
    .string('Enter your password')
    .min(8, 'The length of the password must be at least 8 characters')
    .required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ name, email, password }, { resetForm }) => {
    // const { name, email, password } = values;
    dispatch(register({ name, email, password }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <Form>
        <FormField>
          <FormLabel>
            <LabelText>Username</LabelText>
            <Field
              name="name"
              placeholder="Enter a name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </FormLabel>
        </FormField>
        <FormField>
          <FormLabel>
            <LabelText>Email</LabelText>
            <Field
              type="email"
              name="email"
              placeholder="Enter a email"
              required
            />
            <ErrorMessage name="email" component="div" />
          </FormLabel>
        </FormField>
        <FormField>
          <FormLabel>
            <LabelText>Password</LabelText>
            <Field
              type="password"
              name="password"
              placeholder="Create a password"
              required
            />
            <ErrorMessage name="password" component="div" />
          </FormLabel>
        </FormField>
        <FormButton type="submit">Register</FormButton>
      </Form>
    </Formik>
  );
};

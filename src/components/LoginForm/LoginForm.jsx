import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { logIn } from 'redux/auth/operations';
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
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ email, password }, { resetForm }) => {
    // const { name, email, password } = values;
    dispatch(logIn({ email, password }));

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

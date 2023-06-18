import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import { FormTextField } from 'components/FormTextField/FormTextField';
import { Form } from './RegisterForm.styled';
import { theme } from 'constants/theme';
import { Button } from 'components/Button/Button';

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
  const [showPassword, setShowPassword] = useState(false);

  const onVisibilityPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

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
        <FormTextField name="name" label="Name" />
        <FormTextField name="email" label="Email" />
        <FormTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
        >
          <IconButton
            onClick={onVisibilityPassword}
            sx={{
              ':hover': {
                color: `${theme.colors.textAccent}`,
              },
            }}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </FormTextField>
        <Button text={'Register'} />
      </Form>
    </Formik>
  );
};

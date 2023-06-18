import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormTextField } from 'components/FormTextField/FormTextField';
import { theme } from 'constants/theme';
import { Button } from 'components/Button/Button';
import { Form } from './LoginForm.styled';

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
  const [showPassword, setShowPassword] = useState(false);

  const onVisibilityPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

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
        <Button text={'Login'} />
      </Form>
    </Formik>
  );
};

// import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectError } from 'redux/auth/selectors';
import { theme } from '../constants/theme';

const Register = () => {
  const error = useSelector(selectError);

  return (
    <div>
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <RegisterForm />
      {error && (
        <p
          style={{
            color: `${theme.colors.error}`,
            marginTop: `${theme.spacing(4)}`,
            textAlign: 'center',
          }}
        >
          Oops, something went wrong... Please, try again.
        </p>
      )}
    </div>
  );
};

export default Register;

// import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { selectError } from 'redux/auth/selectors';
import { theme } from '../constants/theme';

const Login = () => {
  const error = useSelector(selectError);

  return (
    <div>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <LoginForm />
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

export default Login;

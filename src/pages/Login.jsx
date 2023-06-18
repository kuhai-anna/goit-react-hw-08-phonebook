// import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { selectError } from 'redux/auth/selectors';
import { theme } from '../constants/theme';
import { Section } from 'components/Section/Section';

const Login = () => {
  const error = useSelector(selectError);

  return (
    <Section>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <LoginForm />
      {error && (
        <p
          style={{
            color: `${theme.colors.textError}`,
            marginTop: `${theme.spacing(4)}`,
            textAlign: 'center',
          }}
        >
          Oops, something went wrong... Please, try again.
        </p>
      )}
    </Section>
  );
};

export default Login;

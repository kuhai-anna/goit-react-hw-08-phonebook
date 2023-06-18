// import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectError } from 'redux/auth/selectors';
import { theme } from '../constants/theme';
import { Section } from 'components/Section/Section';

const Register = () => {
  const error = useSelector(selectError);

  return (
    <Section>
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <RegisterForm />
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

export default Register;

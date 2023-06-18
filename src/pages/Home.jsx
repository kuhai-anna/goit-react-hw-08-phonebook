import { Button } from '@mui/material';
import { Section } from 'components/Section/Section';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

const styles = {
  wrapper: {
    margin: '0 auto',
    maxWidth: 440,
    textAlign: 'center',
  },
  text: {
    marginBottom: 8,
  },
};

const Home = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Section mainTitle="Welcome to Phonebook app"></Section>
  ) : (
    <Section mainTitle="Phonebook app">
      <div style={styles.wrapper}>
        <p style={styles.text}>This app helps you manage your contacts</p>

        <div>
          <p>
            To create your account please press{' '}
            <Button
              component={Link}
              to="/register"
              variant="text"
              color="primary"
              size="small"
            >
              Register
            </Button>
          </p>
        </div>
        <div>
          <p>
            If you already have an account press{' '}
            <Button
              component={Link}
              to="/login"
              variant="text"
              color="primary"
              size="small"
            >
              Log In
            </Button>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Home;

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //useSelector
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

// import { useLocalStorage } from 'hooks/useLocalStorage';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: 440,
  },
};

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <Section mainTitle="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <div style={styles.container}>
          <Filter />
          <ContactList />
        </div>
      </Section>
    </>
  );
};

export default Contacts;

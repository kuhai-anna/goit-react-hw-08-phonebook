import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { theme } from 'constants/theme';

const styles = {
  list: {
    marginTop: `${theme.spacing(4)}`,
  },
};

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul style={styles.list}>
      {contacts?.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

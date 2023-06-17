import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts?.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

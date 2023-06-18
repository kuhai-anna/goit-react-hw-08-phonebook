import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Contact, ContactItem, ContactName } from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { theme } from 'constants/theme';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Contact>
        <ContactName>{name} </ContactName>
        <span> {number}</span>
      </Contact>
      <IconButton
        aria-label="delete"
        onClick={onDelete}
        sx={{
          ':hover': {
            color: `${theme.colors.deleteBtn}`,
          },
        }}
      >
        <RemoveCircleIcon fontSize="inherit" />
      </IconButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

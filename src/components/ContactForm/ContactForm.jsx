import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { FormTextField } from 'components/FormTextField/FormTextField';
import { Button } from 'components/Button/Button';
import { Form } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string(
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    )
    .min(2, 'Too short!')
    .max(40, 'Too long!')
    .required('Name is a required field!'),
  number: yup
    .number(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is a required field!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const onFormSubmit = ({ name, number }, { resetForm }) => {
    // const { name, number } = values;
    const normalizeNewName = name.toLowerCase();
    const nameList = contacts?.map(contact => contact.name.toLowerCase()); // ?

    nameList?.includes(normalizeNewName)
      ? toast.error(`You already have a contact named ${name}.`)
      : dispatch(addContact({ name, number }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <Form>
        <FormTextField name="name" label="Name" />
        <FormTextField name="number" label="Number" />
        <Button text={'Add contact'} />
      </Form>
    </Formik>
  );
};

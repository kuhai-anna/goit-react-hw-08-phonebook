import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import {
  Field,
  Form,
  FormButton,
  FormField,
  FormLabel,
  ErrorMessage,
  LabelText,
} from './ContactForm.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

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
        <FormField>
          <FormLabel>
            <LabelText>Name</LabelText>
            <Field
              name="name"
              placeholder="Enter a name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </FormLabel>
        </FormField>
        <FormField>
          <FormLabel>
            <LabelText>Number</LabelText>
            <Field
              type="tel"
              name="number"
              placeholder="Enter a number"
              // placeholder="+380 XX XXX XX XX"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="phone" component="div" />
          </FormLabel>
        </FormField>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};

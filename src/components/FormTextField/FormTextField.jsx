import { Field } from 'formik';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { theme } from 'constants/theme';

export const FormTextField = ({ name, label, type = 'text', children }) => {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors } }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="filled"
          error={touched[name] && Boolean(errors[name])}
          helperText={touched[name] && errors[name]}
          fullWidth
          margin="normal"
          size="small"
          InputProps={{
            endAdornment: children,
          }}
          sx={{
            '&:hover': {
              outline: `${theme.colors.borderHover}`,
            },
          }}
        />
      )}
    </Field>
  );
};

FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.node,
};

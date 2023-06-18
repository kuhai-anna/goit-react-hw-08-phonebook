import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onFilterContacts = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <TextField
      id="standard-number"
      label="Find contacts by name"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
      variant="filled"
      value={filterValue}
      onChange={onFilterContacts}
      fullWidth
    />
  );
};

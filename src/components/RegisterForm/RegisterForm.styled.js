import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  margin: ${props => props.theme.spacing(0)} auto;
  max-width: 440px;
`;

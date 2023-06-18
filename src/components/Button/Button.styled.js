import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  width: 100%;
  margin-top: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(3.5)};

  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};

  border: 1px solid transparent;
  border-radius: ${props => props.theme.spacing(1)};
  outline: none;

  transition-property: color, border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.textAccent};
    border: 1px solid ${props => props.theme.colors.borderHover};
  }
`;

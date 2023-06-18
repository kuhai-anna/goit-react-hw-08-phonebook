import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};

  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing(1)};

  :not(:last-of-type) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  color: ${props => props.theme.colors.text};
`;

export const ContactName = styled.span`
  font-weight: 500;
`;

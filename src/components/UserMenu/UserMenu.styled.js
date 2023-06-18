import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
`;

export const UserEmail = styled.p`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(0.5)};
  font-weight: 500;
`;

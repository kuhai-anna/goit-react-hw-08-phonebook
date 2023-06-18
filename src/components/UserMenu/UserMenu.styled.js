import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
`;

export const UserEmail = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing(0.5)};
    font-weight: 500;
  }
`;

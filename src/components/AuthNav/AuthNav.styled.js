import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
`;

export const AuthLink = styled(NavLink)`
  display: block;
  padding: ${props => props.theme.spacing(2)};

  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};

  border-radius: ${props => props.theme.spacing(1)};

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.textAccent};
    background-color: ${props => props.theme.colors.linkBgdHover};
  }

  &.active {
    color: ${props => props.theme.colors.textAccent};
  }
`;

import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { UserEmail, Wrapper } from './UserMenu.styled';
import { theme } from 'constants/theme';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserEmail>
        <PermIdentityIcon aria-label="Accaunt" />
        {user.email}
      </UserEmail>
      <IconButton
        aria-label="logout"
        sx={{
          color: `${theme.colors.text}`,
          ':hover': {
            color: `${theme.colors.textAccent}`,
          },
        }}
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon />
      </IconButton>
    </Wrapper>
  );
};

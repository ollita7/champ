import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { ReactElement } from 'react';
import { connect } from "react-redux";
import { useQueryClient } from 'react-query';

import './styles.scss'
import { RootState } from "../../../store/store";
import { Logout, Settings } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IProfileState } from '../../../store/reducers/profile';
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../navigation/constants';
import { Config } from '../../../utils';
import { setCurrentAccount } from '../../../network/services/account/account.service';
import { getProfile } from '../../../store/selectors';

export interface IUserProps {
  profile: IProfileState
}

const User: React.FC<IUserProps> = ({ profile, ...props }): ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    queryClient.clear();
    localStorage.setItem(Config.TOKEN_NAME, '');
    setCurrentAccount({});
    navigate(ROUTES.LOGIN);
  }

  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} src={`${profile.picture && profile.picture}`}>{profile.name[0]}</Avatar>
          <ArrowDropDownIcon fontSize='medium' className='arrow-drop-down'/>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'hidden',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'fixed',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem>
          <Avatar sx={{ width: 32, height: 32 }} src={`${profile.picture && profile.picture}`}>{profile.name[0]}</Avatar>
          {/*profile.picture ?
           <Avatar sx={{ width: 32, height: 32 }} src={profile.picture}></Avatar>:
            <Avatar sx={{ width: 32, height: 32 }}>{profile.name[0]}</Avatar>*/}
          {profile.name}
          <br />
          {profile.email}
        </MenuItem>
        <Divider />
        <GoogleLogout
          clientId={Config.GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          render={renderProps => (
            <MenuItem onClick={renderProps.onClick}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <span >
                Logout
              </span>
            </MenuItem>
          )}
        >
        </GoogleLogout>

      </Menu>
    </div>

  );
}

const mapStateToProps = (state: RootState) => ({
  profile: getProfile(state),
});

export default connect(mapStateToProps)(User);

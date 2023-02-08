import React, { ReactElement } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from "react-redux";

import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Logo from '../../assets/logo_white.svg';
import Atpe from '../../assets/atpe.svg';
import { ROUTES } from '../../navigation/constants';
import { useLogout } from '../../network/services/user/user.service';
import { IStoreDispatchProps } from '../../store/storeComponent';
import { clearProfile  } from '../../store/reducers/profile';
import { getProfile } from '../../store/selectors';
import { RootState } from "../../store/store";
import { IProfileState } from '../../store/reducers/profile';

import './styles.scss';

const pages = [
  {title: 'Grupos', link: ROUTES.HOME}, 
  {title: 'Cruces', link: ROUTES.QUALIFYINGS},
  {title: 'Ranking', link: ROUTES.RANKING},
  {title: 'Reglamento', link: ROUTES.TERMS},
  {title: 'Acceder', link: ROUTES.LOGIN},
];

export interface IResponsiveMenuProps  extends IStoreDispatchProps {
  profile: IProfileState;
}

const ResponsiveMenu: React.FC<IResponsiveMenuProps> = ({ profile, ...props }): ReactElement => {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string | null = null) => {
    setAnchorElNav(null);
    if (page && page == '/terms')
      window.open('http://ocean-tour.netlify.app/reglamento.pdf');
    else if (page) navigate(page);
  };

  const handleLogout = () => {
    useLogout();
    props.dispatch(clearProfile());
    handleClose();
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='menu'>
      <AppBar position="sticky" className='header'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu()}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={() => handleCloseNavMenu(page.link)}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => handleCloseNavMenu(page.link)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            <div className='atpe'>
              <img src={Atpe} alt="logo" />
            </div>
            {/*<Button color="inherit" onClick={() => navigate(ROUTES.LOGIN)}>Login</Button>*/}
            {profile?._id && 
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>{profile.name}</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            }
          </Toolbar>
        </Container>
      </AppBar>
      <div className='logo'>
        <img src={Logo} alt="logo" />
      </div>
      
    </div>
    
  );
}

const mapStateToProps = (state: RootState) => ({
  profile: getProfile(state),
});

export default connect(mapStateToProps)(ResponsiveMenu);
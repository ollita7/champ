import React, { ReactElement } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

import './styles.scss'

const pages = [
  {title: 'Grupos', link: ROUTES.HOME}, 
  {title: 'Cruces', link: ROUTES.QUALIFYINGS},
  {title: 'Ranking', link: ROUTES.RANKING},
  {title: 'Reglamento', link: ROUTES.TERMS}
];

export interface IResponsiveMenuProps {
}

const ResponsiveMenu: React.FC<IResponsiveMenuProps> = ({ ...props }): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string | null = null) => {
    setAnchorElNav(null);
    if (page) navigate(page);
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
              <div className='atpe'>
                <img src={Atpe} alt="logo" />
              </div>
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
          </Toolbar>
        </Container>
      </AppBar>
      <div className='logo'>
        <img src={Logo} alt="logo" />
      </div>
      
    </div>
    
  );
}
export default ResponsiveMenu;
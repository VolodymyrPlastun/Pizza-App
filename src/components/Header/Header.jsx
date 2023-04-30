import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { logo } from '../../logo';
import {
  AmountBox,
  AmountLg,
  AmountSm,
  PageLink,
  TotalLg,
  TotalSm,
} from './Header.styled';

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { amount } = useSelector(store => store.cart);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="info">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pizza Day
          </Typography>

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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <PageLink to="/" activeclassname="active">
                  Pizza
                </PageLink>
              </MenuItem>
              <MenuItem>
                <PageLink to="/cart" activeclassname="active">
                  Cart
                </PageLink>
              </MenuItem>
            </Menu>
          </Box>

          <img width="40px" height="40px" src={logo} alt="logo" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pizza Day
          </Typography>
          <AmountBox
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <ShoppingCart fontSize="small" />
            <AmountSm>
              <TotalSm>{amount}</TotalSm>
            </AmountSm>
          </AmountBox>
          <AmountBox
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <PageLink to="/" activeclassname="active">
              Pizza
            </PageLink>
            <PageLink to="/cart" activeclassname="active">
              Cart
            </PageLink>
            <ShoppingCart fontSize="large" />
            <AmountLg>
              <TotalLg>{amount}</TotalLg>
            </AmountLg>
          </AmountBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

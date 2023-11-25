import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../src/assets/news.png"








const visiblePages = ['Add Articles', 'All Articles','Subscription','Dashboard','My Articles','Premium Articles '];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 
  const isAuthenticated = true; 
  const pages = isAuthenticated ? visiblePages : visiblePages.filter(page => page !== 'Dashboard');
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
           <Link to="/"> <img className='h-[60px] object-cover' src={logo} alt="logo" /></Link>
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
                display: { xs: 'block', md: 'none'},
                textAlign: 'center'
              }}
            >
                <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-medium underline" : ""
  }
>
  HOME
</NavLink>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  
                  <Typography textAlign="center">
                    
                    <NavLink activeClassName="active-link"   style={{textDecoration: 'none'}} to={`/${page}`}>
                    {page}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
           <Link to='/'> <img className='h-[60px] object-cover'  src={logo} alt="logo" /></Link>
          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'center',alignItems:'center' }}>
          <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-medium underline" : ""
  }
>
  HOME
</NavLink>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               

                    <NavLink
  to={`/${page}`}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-medium underline" : ""
  }
>
  {page}
</NavLink>


              </Button>
            ))}
          </Box>

              
       
        

          
         
         
         <Link to='/profile'>

         <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User logo">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
           
          </Box>
         </Link>
       
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
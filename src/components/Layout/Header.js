import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Divider } from '@mui/material'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { NavLink } from 'react-router-dom';
import Menu from '../../pages/Menu';
import Payment from '../../pages/Payment';
import Contact from '../../pages/Contact';
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1, my:2 }}>
        <RestaurantMenuIcon />
        SKYZ9</Typography>
        <Divider />
        <ul className="mobile-navigation">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>

          <li>
            <NavLink to={"/payment"}>Payment</NavLink>
          </li>

          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>

    </Box>

  )
  return (



    //header

    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" }, }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <RestaurantMenuIcon />
              SKYZ9</Typography>
            <Box sx={{ display: { xs: 'none', sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active"  to={"/menu"}>Menu</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active"  to={"/payment"}>Payment</NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active"  to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{
              boxSizing:"boder-box",
              width:"240px",
            } }}>
              {drawer}
            </Drawer>
        </Box>
        <Box>    
        </Box>
        <Toolbar />
      </Box>
    </>
  )
}

export default Header
// src/Components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Notifications from './Notifications';
import ProfileMenu from './ProfileMenu';
import DarkModeToggle from './DarkModeToggle';

const Navbar = ({ mode, toggleMode }) => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Dashboard</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DarkModeToggle mode={mode} toggleMode={toggleMode} />
          <Notifications />
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

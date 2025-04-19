// src/Layout.jsx
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

const Layout = ({ children, mode, toggleMode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;

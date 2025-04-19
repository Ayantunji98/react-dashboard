// src/Components/DarkModeToggle.jsx
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const DarkModeToggle = ({ mode, toggleMode }) => {
  return (
    <Tooltip title="Toggle theme">
      <IconButton onClick={toggleMode} color="inherit">
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;

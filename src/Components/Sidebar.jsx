// src/Components/Sidebar.jsx
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed(!collapsed);

  const drawerWidth = collapsed ? 72 : 240;

  const menuItems = [
    { icon: <DashboardIcon />, label: 'Dashboard', path: '/' },
    { icon: <PersonIcon />, label: 'Profile', path: '/profile' },
    { icon: <SettingsIcon />, label: 'Settings', path: '/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        transition: 'width 0.3s ease-in-out',
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease-in-out',
          overflowX: 'hidden',
        },
      }}
    >
      <IconButton onClick={handleToggle} sx={{ m: 1 }}>
        <MenuIcon />
      </IconButton>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <Tooltip key={index} title={collapsed ? item.label : ''} placement="right">
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {!collapsed && <ListItemText primary={item.label} />}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

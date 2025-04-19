// src/Pages/Profile.jsx
import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const Profile = () => {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ width: 80, height: 80, mb: 2 }} src="/avatar.jpg" />
        <Typography variant="h6">Jane Doe</Typography>
        <Typography variant="body2" color="text.secondary">
          UI/UX Designer @ Keebler LLC
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;

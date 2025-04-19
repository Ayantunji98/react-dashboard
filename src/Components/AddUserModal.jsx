// src/Components/AddUserModal.jsx
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function AddUserModal({ open, handleClose, handleAddUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    handleAddUser(formData);
    setFormData({ name: '', email: '', phone: '', company: '' });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">Add New User</Typography>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          label="Company"
          name="company"
          fullWidth
          margin="normal"
          value={formData.company}
          onChange={handleChange}
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
          Add
        </Button>
      </Box>
    </Modal>
  );
}

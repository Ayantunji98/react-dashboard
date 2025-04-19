// src/Components/UserTable.jsx
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'name',
    headerName: 'User',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    flex: 1,
  },
  {
    field: 'company',
    headerName: 'Company',
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    company: 'Romaguera-Crona',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    company: 'Deckow-Crist',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    company: 'Romaguera-Jacobson',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    company: 'Robel-Corkery',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    company: 'Keebler LLC',
  },
  // Add more rows if needed
];

const UserTable = () => {
  return (
    <Box sx={{ height: 500, width: '100%', mt: 4 }}>
      <Button variant="contained" sx={{ mb: 2 }}>
        Add New User
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
};

export default UserTable;

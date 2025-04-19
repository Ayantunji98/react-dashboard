// src/App.jsx
import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './Layout';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import { getTheme } from './theme';

const App = () => {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout mode={mode} toggleMode={toggleMode}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

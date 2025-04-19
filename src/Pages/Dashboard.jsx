import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import StoreIcon from '@mui/icons-material/Store';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const chartData = [
  { name: 'Jan', users: 200 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 400 },
  { name: 'Apr', users: 500 },
];

const pieData = [
  { name: 'Tech', value: 400 },
  { name: 'Finance', value: 300 },
  { name: 'Healthcare', value: 300 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = () => {
      setTimeout(() => {
        setStats([
          { icon: <PeopleAltIcon sx={{ fontSize: 40, color: 'primary.main' }} />, label: 'Total Users', value: 1200 },
          { icon: <BarChartIcon sx={{ fontSize: 40, color: 'success.main' }} />, label: 'Active Sessions', value: 342 },
          { icon: <StoreIcon sx={{ fontSize: 40, color: 'warning.main' }} />, label: 'Companies', value: 78 },
        ]);
      }, 1000);
    };

    fetchStats();
  }, []);

  return (
    <Box>
      <Typography variant="h5" mb={3}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {stats ? (
          stats.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <Box mr={2}>{stat.icon}</Box>
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h6">{stat.value}</Typography>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>

      {/* Charts section */}
      <Box mt={5}>
        <Typography variant="h6" mb={2}>
          Monthly Users
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#3f51b5" animationDuration={800} />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Box mt={5}>
        <Typography variant="h6" mb={2}>
          Company Breakdown
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={50}
              label
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;

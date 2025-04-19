import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
  } from 'recharts';
  
  const data = [
    { name: 'Jan', users: 30 },
    { name: 'Feb', users: 45 },
    { name: 'Mar', users: 60 },
    { name: 'Apr', users: 75 },
    { name: 'May', users: 90 },
  ];
  
  const UserChart = () => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Monthly Active Users</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="users"
              fill="#3b82f6"
              animationDuration={1000}
              isAnimationActive={true}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default UserChart;
  
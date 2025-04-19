import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tech', value: 40 },
  { name: 'Finance', value: 25 },
  { name: 'Healthcare', value: 20 },
  { name: 'Other', value: 15 },
];

const COLORS = ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b'];

const CompanyChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">User Companies</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            innerRadius={60}
            paddingAngle={5}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanyChart;

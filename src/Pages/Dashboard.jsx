import DataTable from '../Components/DataTable';
import AddDataModal from '../Components/AddDataModal';
import UserChart from '../Components/UserChart';
import CompanyChart from '../Components/CompanyChart';
import { useState } from 'react';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="ml-64 mt-20 p-6 dark:bg-gray-900 bg-gray-100 min-h-screen text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Table</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          Add New User
        </button>
      </div>
      <DataTable />
      <AddDataModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Dashboard;

import { useEffect, useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleSort = (key) => {
    let order = 'asc';
    if (sortKey === key && sortOrder === 'asc') {
      order = 'desc';
    }
    setSortKey(key);
    setSortOrder(order);
  };

  const filteredData = data
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (!sortKey) return 0;
      const aVal = a[sortKey].toLowerCase?.() || a[sortKey];
      const bVal = b[sortKey].toLowerCase?.() || b[sortKey];
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const getInitials = (name) => {
    const names = name.split(' ');
    const initials = names.map(n => n[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-4">
        <input
          type="text"
          placeholder="Filter by name..."
          className="border p-2 rounded w-full sm:w-1/3 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase tracking-wider">
          <tr>
            <th className="px-6 py-3">User</th>
            <th
              className="px-6 py-3 cursor-pointer"
              onClick={() => handleSort('email')}
            >
              Email {sortKey === 'email' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Company</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user) => (
            <tr key={user.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="flex items-center gap-3 px-6 py-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                  {getInitials(user.name)}
                </div>
                <span>{user.name}</span>
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="px-6 py-4">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

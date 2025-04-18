import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="hover:text-gray-300">🏠 Dashboard</Link></li>
          <li><Link to="/" className="hover:text-gray-300">📊 Reports</Link></li>
          <li><Link to="/" className="hover:text-gray-300">📁 Data</Link></li>
          <li><Link to="/" className="hover:text-gray-300">⚙️ Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}
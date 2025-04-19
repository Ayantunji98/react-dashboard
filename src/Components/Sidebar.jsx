import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col shadow-lg">
      <div className="p-6 text-2xl font-bold tracking-tight border-b border-gray-700">
        Dashboard
      </div>
      <nav className="flex-1 mt-6 space-y-2 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition-all ${
              isActive ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-800'
            }`
          }
        >
          Home
        </NavLink>
        {/* Add more links here if needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;

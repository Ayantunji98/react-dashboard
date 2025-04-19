// Components/Navbar.jsx
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { Bell } from 'lucide-react';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className="ml-64 bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-1 w-1/3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />

      <div className="flex items-center space-x-4">
        <DarkModeToggle />

        {/* User Dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
            {/* Avatar (initials or fallback) */}
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
              JD
            </div>
            <ChevronDownIcon className="ml-2 w-4 h-4 text-gray-600 dark:text-gray-300" />
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 rounded-md shadow-lg focus:outline-none z-50">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleNavigate('/profile')}
                    className={`${
                      active ? 'bg-gray-200 dark:bg-gray-700' : ''
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm text-left`}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleNavigate('/settings')}
                    className={`${
                      active ? 'bg-gray-200 dark:bg-gray-700' : ''
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm text-left`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleNavigate('/logout')}
                    className={`${
                      active ? 'bg-red-100 dark:bg-red-700' : ''
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm text-left text-red-600 dark:text-red-300`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;

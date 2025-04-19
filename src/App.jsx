import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
 
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/settings" element={<Settings />} />
</Routes>
const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

const Profile = () => {
    return (
      <div className="ml-64 mt-20 p-6 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              JD
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p>
            </div>
          </div>
  
          <div className="mt-6 space-y-3">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p>john.doe@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>+1 555-123-4567</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Company</p>
              <p>Acme Corp</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  
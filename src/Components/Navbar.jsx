export default function Navbar({ onAddClick }) {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4">
      <input type="text" placeholder="Search..." className="border p-2 w-1/3 rounded" />
      <div className="flex items-center gap-4">
        <button onClick={onAddClick} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New
        </button>
        <span>Hello, User 👤</span>
      </div>
    </div>
  );
}
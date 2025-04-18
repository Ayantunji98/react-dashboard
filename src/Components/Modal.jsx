export default function Modal({ onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    onSubmit({ name, email, active: true });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <input className="border p-2 mb-2 w-full" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="border p-2 mb-2 w-full" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
      </div>
    </div>
  );
}

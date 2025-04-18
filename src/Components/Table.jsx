export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <span className={`px-2 py-1 text-sm rounded ${user.active ? "bg-green-200 text-green-700" : "bg-gray-300 text-gray-700"}`}>
                  {user.active ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

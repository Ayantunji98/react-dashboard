import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Modal from "../components/Modal";

const initialData = [
  { name: "John Doe", email: "example@example.com", active: true },
  { name: "Sophia Martinez", email: "example@example.com", active: false },
];

export default function Dashboard() {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);

  const addUser = (user) => setData([...data, user]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar onAddClick={() => setShowModal(true)} />
        <main className="p-4">
          <Table data={data} />
        </main>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} onSubmit={addUser} />}
    </div>
  );
}

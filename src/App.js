import React, { useState } from "react";

export default function RegistrationCRUD() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = form;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }
    setForm({ name: "", email: "" });
  };

  const handleEdit = (i) => {
    setForm(users[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    setUsers(users.filter((_, index) => index !== i));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>👤 Registration Form (CRUD)</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.name} - {u.email}{" "}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// UserForm.jsx
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const UserForm = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const usersCollection = collection(db, "users");

  const fetchUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const userDoc = doc(db, "users", editId);
      await updateDoc(userDoc, { name });
      setEditId(null);
    } else {
      await addDoc(usersCollection, { name });
    }
    setName("");
    fetchUsers();
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserForm;

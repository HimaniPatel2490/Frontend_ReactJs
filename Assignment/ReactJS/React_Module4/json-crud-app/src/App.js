import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './Components/UserForm';
import UserTable from './Components/UserTable';

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const API_URL = 'http://localhost:5000/users';

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    await axios.post(API_URL, user);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  const updateUser = async (user) => {
    await axios.put(`${API_URL}/${user.id}`, user);
    setEditUser(null);
    fetchUsers();
  };

  const patchUser = async (id, patchData) => {
    await axios.patch(`${API_URL}/${id}`, patchData);
    fetchUsers();
  };

  return (
    <div className="App">
      <h2>User Management</h2>
      <UserForm
        addUser={addUser}
        editUser={editUser}
        updateUser={updateUser}
      />
      {/* <UserTable/> */}
      <UserTable
        users={users}
        deleteUser={deleteUser}
        setEditUser={setEditUser}
        patchUser={patchUser}
      />
    </div>
  );
}

export default App;

import React from 'react';

function UserTable({ users, deleteUser, setEditUser, patchUser }) {
  const markAnonymous = (user) => {
    patchUser(user.id, { name: 'Anonymous' });
  };

  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr><td colSpan="4">No users found</td></tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
              <td>
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => markAnonymous(user)}>Patch</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default UserTable;

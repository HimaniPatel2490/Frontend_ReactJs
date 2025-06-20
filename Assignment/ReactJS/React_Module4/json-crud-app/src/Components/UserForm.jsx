import React, { useState, useEffect } from 'react';

function UserForm({ addUser, editUser, updateUser }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editUser) setUser(editUser);
    else setUser({ name: '', email: '' });
  }, [editUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) updateUser(user);
    else addUser({ ...user });
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{user.id ? 'Update' : 'Add'} User</button>
    </form>
  );
}

export default UserForm;

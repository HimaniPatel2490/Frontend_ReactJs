import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/Users/UserSlice';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (name && email) {
      dispatch(addUser({ name, email }));
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input type="text" placeholder="Name" value={name}
        onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email}
        onChange={e => setEmail(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default UserForm;

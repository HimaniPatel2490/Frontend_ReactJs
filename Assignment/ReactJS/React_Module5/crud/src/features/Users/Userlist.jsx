import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from './UserSlice';

const UserList = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const [editUserId, setEditUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  const handleEdit = user => {
    setEditUserId(user.id);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
  };

  const handleUpdate = () => {
    dispatch(updateUser({ id: editUserId, name: updatedName, email: updatedEmail }));
    setEditUserId(null);
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id}>
          {editUserId === user.id ? (
            <>
              <input value={updatedName} onChange={e => setUpdatedName(e.target.value)} />
              <input value={updatedEmail} onChange={e => setUpdatedEmail(e.target.value)} />
              <button onClick={handleUpdate}>Update</button>
            </>
          ) : (
            <>
              <span>{user.name} - {user.email}</span>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;

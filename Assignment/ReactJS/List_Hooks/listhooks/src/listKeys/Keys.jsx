// Keys.jsx
import React from 'react';

const Keys = () => {
  const users = [
    { id: 1, name: 'Himani', age: 25 },
    { id: 2, name: 'Divyesh', age: 29 },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default Keys;
function Abc() {
  return (
    <div>
      <Keys />
    </div>
  );
}

export default Abc;

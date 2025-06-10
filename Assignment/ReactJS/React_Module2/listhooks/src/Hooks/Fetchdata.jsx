import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ol>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ol>
    </div>
  );
};



function Data() {
  return (
    <div className="App">
      <FetchData />
    </div>
  );
}

export default Data;

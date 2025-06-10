import React, { Component } from 'react';

class Mount extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Fetch data from API when component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ users: data, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
      });
  }

  render() {
    const { users, loading, error } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h2>User Data (componentDidMount)</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && (
          <ol>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default Mount;

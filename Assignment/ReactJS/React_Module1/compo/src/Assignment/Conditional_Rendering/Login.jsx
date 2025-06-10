import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome, User!' : 'Please log in'}</h2>
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Firebase Auth & CRUD</h1>
      <Auth user={user} setUser={setUser} />
      {user && <Dashboard />}
    </div>
  );
};

export default App;

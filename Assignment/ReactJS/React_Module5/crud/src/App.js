import React from "react";
import UserForm from "./Components/UserForm";
import UserList from "./features/Users/Userlist";

function App() {
  return (
    <div className="App">
      <UserForm/>
      <UserList/>
    </div>
  );
}

export default App;

import React from "react";
import { RecoilRoot } from 'recoil';
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";


function App() {
  return (
   <div>
    <RecoilRoot>
      <div style={{ padding: '20px' }}>
        <h2>Recoil Todo List</h2>
        <AddTodo/>
        <TodoList/>
      </div>
    </RecoilRoot>
   </div>
  );
}

export default App;

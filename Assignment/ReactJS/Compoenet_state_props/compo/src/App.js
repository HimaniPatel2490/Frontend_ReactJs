import React from "react";
import Hello from "./Assignment/Hello";
import JavaScript from "./Assignment/Javascript";
import Name from "./Assignment/component/Greeting";
import Task from "./Assignment/component/ClassCompo";
import Count from "./Assignment/PropsAndState/Counter";
import Card from "./Assignment/PropsAndState/UserCard";
function App() {
  return (
    <div>
      <Hello/>
      <hr />
      <JavaScript/>
      <hr />
      <Name/>
      <hr />
      <Task/>
      <hr />
    <Count/>
    <hr />
      <Card/>
          </div>
  );
}

export default App;

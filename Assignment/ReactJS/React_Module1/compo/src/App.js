import React from "react";
import Hello from "./Assignment/Hello";
import JavaScript from "./Assignment/Javascript";
import Name from "./Assignment/component/Greeting";
import Task from "./Assignment/component/ClassCompo";
import Count from "./Assignment/PropsAndState/Counter";
import Card from "./Assignment/PropsAndState/UserCard";
import Clicked from "./Assignment/Handling_event/Clicked";
import Dynamic from "./Assignment/Handling_event/Dynamic";
import Login from "./Assignment/Conditional_Rendering/Login";
import Voting from "./Assignment/Conditional_Rendering/Voting";
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
      <hr /><hr />
      <Clicked/>
      <hr />
      <Dynamic/>
      <hr /><hr />
      <Login/>
      <hr />
      <Voting/>
          </div>
  );
}

export default App;

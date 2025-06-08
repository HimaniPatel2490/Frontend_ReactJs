import React from "react";
import ListKeys from "./listKeys/MapFunction";
import Abc from "./listKeys/Keys";
import CounterTask from "./Hooks/UseState";

function App() {
  return (
   <div>
    <ListKeys/>
    <hr />
    <Abc/>
    <hr /> <hr />
    <CounterTask/>
   </div>
  );
}

export default App;

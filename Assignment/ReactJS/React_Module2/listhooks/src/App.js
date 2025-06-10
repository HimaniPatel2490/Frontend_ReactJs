import React from "react";
import ListKeys from "./listKeys/MapFunction";
import Abc from "./listKeys/Keys";
import CounterTask from "./Hooks/UseState";
import Data from "./Hooks/Fetchdata";
import StateContext, { StateProvider } from "./Hooks/task3/StateContext";
import Avoid from "./Hooks/Avoid";

import Mount from "./lifecycle/Mount";
import Forms from "./Forms/Forms";
import Validation from "./Forms/Validation";
import Compo from "./lifecycle/Updateunmount";

function App() {
  return (
   <div>
    <ListKeys/>
    <hr />
    <Abc/>
    <hr /> <hr />
    {/* Hooks */}
      <CounterTask/>
      <hr />
      <Data/>
      <hr />
      <StateContext/>
    
      <hr />
      <Avoid/>
      <hr /><hr />
    <Forms/>
    <hr />
    <Validation/>
    <hr /><hr />
    <Mount/>
    <hr />
    <Compo/>
   </div>
  );
}

export default App;

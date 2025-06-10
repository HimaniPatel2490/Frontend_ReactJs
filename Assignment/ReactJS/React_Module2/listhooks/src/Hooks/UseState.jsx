// useState.jsx
import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// export default UseStateCounter;
function CounterTask () {
  return (
    <div className="App">
      <UseStateCounter />
    </div>
  );
}

export default CounterTask;

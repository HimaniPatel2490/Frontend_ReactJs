// MapFunction.jsx
import React from 'react';

const MapFunction = () => {
  const fruits = ['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange'];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// export default MapFunction;

function ListKeys() {
  return (
    <div>
      <MapFunction />
    </div>
  );
}

export default ListKeys;
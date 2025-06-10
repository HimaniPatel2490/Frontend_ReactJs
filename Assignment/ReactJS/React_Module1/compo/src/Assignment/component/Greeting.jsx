import React from 'react';

function Greeting({ name }) {
  return <h2>Hello, {name}</h2>;
}

function Name() {
  return (
    <div>
      <Greeting name="Himani Patel" />
    </div>
  );
}

export default Name;

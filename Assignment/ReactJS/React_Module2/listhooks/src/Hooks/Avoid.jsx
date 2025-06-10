import React, { useState, useRef } from 'react';

const Avoid = () => {
  const countRef = useRef(0); // mutable ref that does NOT trigger re-render
  const [, setRender] = useState(0); // dummy state to force re-render

  const handleIncrement = () => {
    countRef.current += 1;
    console.log('Count (ref):', countRef.current);
  };

  const handleForceRender = () => {
    setRender(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Using useRef to Avoid Re-renders</h2>
      <p>Count (stored in ref): {countRef.current}</p>
      <button onClick={handleIncrement}>Increment Count (ref)</button>
      <button onClick={handleForceRender} style={{ marginLeft: '10px' }}>
        Force Re-render
      </button>
    </div>
  );
};

export default Avoid;

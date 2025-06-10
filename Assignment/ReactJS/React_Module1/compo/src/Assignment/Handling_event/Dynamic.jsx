import React, { useState } from 'react';

function Dynamic() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form>
        <label>Enter Your Name: </label>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      <p>Your Name: {inputValue}</p>
    </div>
  );
}

export default Dynamic;

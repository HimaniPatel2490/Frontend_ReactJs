import React, { useState } from 'react';

function Voting() {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const isEligible = age >= 18;

  return (
    <div>
      <h2>Voting Eligibility Checker</h2>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
      />
      {age !== '' && (
        <p>{isEligible ? 'You are eligible to vote.' : 'You are not eligible to vote.'}</p>
      )}
    </div>
  );
}

export default Voting;

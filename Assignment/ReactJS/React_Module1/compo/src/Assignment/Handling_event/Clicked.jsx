import React, { useState } from 'react';

function Clicked() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <p>{isClicked ? 'Clicked!' : 'Not Clicked'}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Clicked;

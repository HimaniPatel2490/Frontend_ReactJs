import React from 'react';

const UserCard = ({ name, age, location }) => {
  const cardStyle = {
    border: '1px solid solid',
    padding: '16px',
    width: '100px',
    margin: '10px',
  };

  const titleStyle = {
    marginBottom: '8px',
    fontSize: '25px',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

// export default UserCard;
function Card() {
  return (
    <div>
      <UserCard name="Himani" age={25} location="Ahmedabad" />
    </div>
  );
}

export default Card;






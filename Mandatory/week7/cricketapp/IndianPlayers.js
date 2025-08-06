// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  // a. Destructuring
  const oddTeam = ['Virat', 'Rahul', 'Shreyas'];
  const evenTeam = ['Rohit', 'Gill', 'Pant'];

  const [p1, p2, p3] = oddTeam;
  const [q1, q2, q3] = evenTeam;

  // b. Merge arrays using ES6 spread
  const T20Players = ['Kohli', 'Rohit', 'Bumrah'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Saha'];
  const AllPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        <li>{q1}</li>
        <li>{q2}</li>
        <li>{q3}</li>
      </ul>

      <h2>Merged T20 + Ranji Trophy Players:</h2>
      <ul>
        {AllPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

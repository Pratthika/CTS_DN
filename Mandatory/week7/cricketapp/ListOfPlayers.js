// src/components/ListOfPlayers.js
import React from 'react';

const ListOfPlayers = () => {
  // 1. Using let and const
  const players = [
    { name: 'Virat Kohli', score: 90 },
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'KL Rahul', score: 40 },
    { name: 'Shreyas Iyer', score: 72 },
    { name: 'Hardik Pandya', score: 66 },
    { name: 'Jasprit Bumrah', score: 95 },
    { name: 'Shubman Gill', score: 55 },
    { name: 'Rishabh Pant', score: 78 },
    { name: 'Mohammed Siraj', score: 49 },
    { name: 'Axar Patel', score: 73 },
  ];

  // 2. Using arrow function to filter scores below 70
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((p, idx) => (
          <li key={idx}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {below70.map((p, idx) => (
          <li key={idx}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;

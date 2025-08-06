import React from 'react';
import './App.css';

// Define office data
const officeSpaces = [
  {
    id: 1,
    name: "Downtown Hub",
    rent: 75000,
    address: "123 City Center, Bangalore",
    image: "https://via.placeholder.com/300x200?text=Downtown+Hub"
  },
  {
    id: 2,
    name: "CoWork Square",
    rent: 55000,
    address: "77 Tech Street, Hyderabad",
    image: "https://via.placeholder.com/300x200?text=CoWork+Square"
  },
  {
    id: 3,
    name: "Startup Space",
    rent: 62000,
    address: "88 Valley Road, Pune",
    image: "https://via.placeholder.com/300x200?text=Startup+Space"
  }
];

function App() {
  const heading = <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Office Space Rental App</h1>;

  return (
    <div className="App">
      {heading}
      {officeSpaces.map(office => (
        <div key={office.id} style={{ 
          border: '1px solid gray', 
          margin: '20px auto', 
          width: '60%', 
          padding: '15px', 
          borderRadius: '10px', 
          boxShadow: '2px 2px 12px rgba(0,0,0,0.1)' 
        }}>
          <img src={office.image} alt={office.name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          <h2>{office.name}</h2>
          <p style={{
            color: office.rent > 60000 ? 'green' : 'red',
            fontWeight: 'bold'
          }}>
            Rent: ₹{office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h3>Dashboard Overview</h3>
      <ul className="list-group">
        <li className="list-group-item">Total FDs: 3</li>
        <li className="list-group-item">Total RDs: 2</li>
        <li className="list-group-item">Total Investment: ₹1,50,000</li>
      </ul>
    </div>
  );
};

export default Dashboard;

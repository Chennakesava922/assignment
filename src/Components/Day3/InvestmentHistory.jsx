import React from 'react';
import { useNavigate } from 'react-router-dom';

const dummyInvestments = [
  { id: 1, type: 'FD', amount: 50000, date: '2024-06-01' },
  { id: 2, type: 'RD', amount: 12000, date: '2024-07-10' },
];

const InvestmentHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h3>Investment History</h3>
      <ul className="list-group">
        {dummyInvestments.map(inv => (
          <li
            key={inv.id}
            className="list-group-item list-group-item-action"
            onClick={() => navigate(`/investment/${inv.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {inv.type} - ₹{inv.amount} - {inv.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentHistory;

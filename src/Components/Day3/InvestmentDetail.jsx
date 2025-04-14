import React from 'react';
import { useParams } from 'react-router-dom';

const InvestmentDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h3>Investment Details</h3>
      <div className="alert alert-info">
        Displaying full details for Investment ID: {id}
      </div>
      {/* You can later fetch actual data here */}
    </div>
  );
};

export default InvestmentDetail;

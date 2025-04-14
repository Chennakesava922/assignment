import React, { useState } from 'react';

const RDContributionEvents = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [tenure, setTenure] = useState(12);
  const interestRate = 6;

  const handleIncrement = () => setMonthlyContribution(prev => prev + 100);
  const handleDecrement = () => setMonthlyContribution(prev => Math.max(prev - 100, 100));

  const totalInvestment = monthlyContribution * tenure;
  const maturityAmount = totalInvestment + (totalInvestment * interestRate * tenure) / (100 * 12);

  return (
    <div className="card mb-4 p-4">
      <h4>RD Contribution Tracker</h4>
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-danger me-2" onClick={handleDecrement}>-</button>
        <span>Monthly Contribution: ₹{monthlyContribution}</span>
        <button className="btn btn-success ms-2" onClick={handleIncrement}>+</button>
      </div>
      <div className="mb-2">
        <label>Tenure (months):</label>
        <input type="number" className="form-control" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </div>
      <div className="alert alert-info mt-2">
        <p><strong>Total Investment:</strong> ₹{totalInvestment}</p>
        <p><strong>Estimated Maturity:</strong> ₹{maturityAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default RDContributionEvents;

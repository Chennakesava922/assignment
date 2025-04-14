// src/components/Day2/FDForm.jsx
import React, { useState } from 'react';

const FDForm = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const interestRate = 7.5; // Auto-filled
  const [maturityAmount, setMaturityAmount] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const interest = (depositAmount * interestRate * tenure) / (12 * 100);
    setMaturityAmount(parseFloat(depositAmount) + interest);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-warning text-dark">FD Investment Form</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Deposit Amount (₹)</label>
            <input
              type="number"
              className="form-control"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Tenure (in months)</label>
            <input
              type="number"
              className="form-control"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Interest Rate (%)</label>
            <input
              type="text"
              className="form-control"
              value={interestRate}
              disabled
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Calculate Maturity
          </button>
        </form>
        {maturityAmount && (
          <div className="mt-3 alert alert-success">
            Maturity Amount: ₹{maturityAmount.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default FDForm;

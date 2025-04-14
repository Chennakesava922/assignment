import React, { useState } from 'react';

const FDCalculator = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState(5.5); // Default
  const [maturity, setMaturity] = useState(null);

  const handleCalculate = () => {
    const interest = (amount * interestRate * tenure) / 100;
    setMaturity(parseFloat(amount) + interest);
  };

  const handleTenureChange = (e) => {
    const value = e.target.value;
    setTenure(value);
    if (value >= 60) setInterestRate(7);
    else if (value >= 36) setInterestRate(6.5);
    else setInterestRate(5.5);
  };

  return (
    <div className="container mt-4">
      <h3>FD Calculator</h3>
      <div className="mb-3">
        <label>Deposit Amount</label>
        <input className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
      </div>
      <div className="mb-3">
        <label>Tenure (in months)</label>
        <input className="form-control" value={tenure} onChange={handleTenureChange} type="number" />
      </div>
      <div className="mb-3">
        <label>Interest Rate: {interestRate}%</label>
      </div>
      <button className="btn btn-primary" onClick={handleCalculate}>Calculate Maturity</button>
      {maturity && <div className="alert alert-success mt-3">Maturity Amount: ₹{maturity.toFixed(2)}</div>}
    </div>
  );
};

export default FDCalculator;

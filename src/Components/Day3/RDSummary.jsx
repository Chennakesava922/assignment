import React, { useState } from 'react';

const RDSummary = () => {
  const [monthly, setMonthly] = useState(1000);
  const [tenure, setTenure] = useState(12);

  const totalInvested = monthly * tenure;
  const estimatedMaturity = totalInvested * 1.08;

  return (
    <div className="container mt-4">
      <h3>RD Summary</h3>
      <div className="mb-3">
        <label>Monthly Contribution</label>
        <input type="number" className="form-control" value={monthly} onChange={(e) => setMonthly(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Tenure (Months)</label>
        <input type="number" className="form-control" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </div>
      <p><strong>Total Invested:</strong> ₹{totalInvested}</p>
      <p><strong>Estimated Maturity:</strong> ₹{estimatedMaturity.toFixed(2)}</p>
    </div>
  );
};

export default RDSummary;

// src/components/Day1/FixedDepositSummary.jsx
import React, { useState } from 'react';

const FixedDepositSummary = ({ depositAmount, interestRate, tenure, maturityAmount }) => {
  const [detailed, setDetailed] = useState(false);

  return (
    <div className="card mb-3 shadow-sm bg-light text-dark">
      <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center fw-semibold">
        <span>Fixed Deposit Summary</span>
        <button className="btn btn-outline-dark btn-sm" onClick={() => setDetailed(!detailed)}>
          {detailed ? 'Summary View' : 'Detailed View'}
        </button>
      </div>
      <div className="card-body">
        <p><strong>Deposit Amount:</strong> ₹{depositAmount}</p>
        <p><strong>Interest Rate:</strong> {interestRate}%</p>
        <p><strong>Tenure:</strong> {tenure} months</p>
        {detailed && (
          <p><strong>Maturity Amount:</strong> ₹{maturityAmount}</p>
        )}
      </div>
    </div>
  );
};

export default FixedDepositSummary;

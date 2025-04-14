import React, { useState } from 'react';

const FDMaturityCalc = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [maturity, setMaturity] = useState(null);

  const getInterestRate = (tenure) => {
    if (tenure < 12) return 5;
    if (tenure < 36) return 6;
    return 7;
  };

  const calculateMaturity = () => {
    const principal = parseFloat(amount);
    const rate = getInterestRate(tenure);
    const maturityAmount = principal + (principal * rate * tenure) / (100 * 12);
    setMaturity(maturityAmount.toFixed(2));
  };

  return (
    <div className="card mb-4 p-4">
      <h4>FD Maturity Calculator</h4>
      <div className="mb-2">
        <label>Deposit Amount:</label>
        <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>Tenure (in months):</label>
        <input type="number" className="form-control" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={calculateMaturity}>Calculate Maturity</button>
      {maturity && (
        <div className="mt-3 alert alert-success">
          Estimated Maturity Amount: ₹{maturity}
        </div>
      )}
    </div>
  );
};

export default FDMaturityCalc;

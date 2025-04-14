import React, { useState } from 'react';

const CreateFD = () => {
  const [form, setForm] = useState({ amount: '', tenure: '', interest: '6.5' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`FD Created: ₹${form.amount} for ${form.tenure} months`);
  };

  return (
    <div className="container mt-4">
      <h3>Create Fixed Deposit</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" className="form-control mb-2" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        <input type="number" className="form-control mb-2" placeholder="Tenure (Months)" value={form.tenure} onChange={(e) => setForm({ ...form, tenure: e.target.value })} />
        <div className="mb-2">Interest Rate: {form.interest}%</div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateFD;

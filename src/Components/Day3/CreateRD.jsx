import React, { useState } from 'react';

const CreateRD = () => {
  const [form, setForm] = useState({ contribution: '', tenure: '', bank: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`RD Created with ₹${form.contribution} per month for ${form.tenure} months at ${form.bank}`);
  };

  return (
    <div className="container mt-4">
      <h3>Create Recurring Deposit</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" className="form-control mb-2" placeholder="Monthly Contribution" value={form.contribution} onChange={(e) => setForm({ ...form, contribution: e.target.value })} />
        <input type="number" className="form-control mb-2" placeholder="Tenure (Months)" value={form.tenure} onChange={(e) => setForm({ ...form, tenure: e.target.value })} />
        <input type="text" className="form-control mb-2" placeholder="Bank Name" value={form.bank} onChange={(e) => setForm({ ...form, bank: e.target.value })} />
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRD;

// src/components/Day2/Day2Assignments.jsx
import React from 'react';
import FDForm from './FDForm';
import RDForm from './RDForm';
import BranchSelector from './BranchSelector';

const Day2Assignments = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Day 2 Components</h2>
      <FDForm />
      <RDForm />
      <BranchSelector />
    </div>
  );
};

export default Day2Assignments;

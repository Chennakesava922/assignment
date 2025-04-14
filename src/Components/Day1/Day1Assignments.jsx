// src/components/Day1/Day1Assignments.jsx
import React from 'react';
import FixedDepositSummary from './FixedDepositSummary';
import RDContributionTracker from './RDContributionTracker';
import CustomerProfile from './CustomerProfile';

const Day1Assignments = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Day 1 Components</h2>

      <FixedDepositSummary
        depositAmount={50000}
        interestRate={7.5}
        tenure={12}
        maturityAmount={54000}
      />

      <RDContributionTracker />

      <CustomerProfile
        name="chennakesava reddy"
        totalFDs={3}
        totalRDs={2}
        totalInvestment={150000}
      />
    </div>
  );
};

export default Day1Assignments;

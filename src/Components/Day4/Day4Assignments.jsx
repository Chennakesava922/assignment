import React from 'react';
import FDMaturityCalc from './FDMaturityCalc';
import RDContributionEvents from './RDContributionEvents';
import ThemeSwitcher from './ThemeSwitcher';

const Day4Assignments = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📅 Day 4 - Interactive Banking Features</h2>
      
      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* FD Maturity Calculator */}
      <FDMaturityCalc />

      {/* RD Contribution Tracker */}
      <RDContributionEvents />
    </div>
  );
};

export default Day4Assignments;

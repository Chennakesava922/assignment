import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? 'bg-light text-dark' : 'bg-dark text-white';
  };

  return (
    <div className="text-end mb-3">
      <button className="btn btn-outline-secondary" onClick={toggleTheme}>
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

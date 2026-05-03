import React from 'react';
import './StatsBar.css';

const StatsBar = () => {
  const stats = [
    { label: 'MCA CGPA', value: '8.93' },
    { label: 'LeetCode Solved', value: '100+' },
    { label: 'Faster Deployments', value: '60%' },
    { label: 'Faster DB Queries', value: '45%' }
  ];

  return (
    <div className="stats-container">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-value text-gradient-accent">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;

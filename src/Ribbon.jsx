// src/Ribbon.jsx
import React from 'react';

const Ribbon = () => {
  return (
    <svg
      viewBox="0 0 1440 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="ribbon"
    >
      <defs>
        <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a4c8400" />
          <stop offset="50%" stopColor="#60c4ff22" />
          <stop offset="100%" stopColor="#0a4c84" />
        </linearGradient>
      </defs>

      <path
        d="
          M -200,100 
          C 0,20 400,180 600,100 
          C 800,20 1200,180 2440,50
          C 1200,180 800,100 600,150 
          C 400,200 0,120 -200,200 
          Z
        "
        fill="url(#ribbonGradient)"
      />
    </svg>
  );
};

export default Ribbon;

// src/Logo.jsx
import React, { useEffect, useMemo, useState } from 'react';
import './Logo.css';

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function Logo() {
  const [positions, setPositions] = useState([
    { x: 0, y: 40 },
    { x: 40, y: 80 },
    { x: 20, y: 120 }, // Centered horizontally
  ]);

  const floatStyles = useMemo(() => {
    return Array.from({ length: 3 }, () => ({
      duration: getRandomFloat(5, 9),
      dy: getRandomFloat(-10, -5),
      delay: getRandomFloat(0, 2),
    }));
  }, []);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const animate = (now) => {
      const elapsed = (now - start) / 1000;

      const newPositions = floatStyles.map((style, i) => {
        const progress = (Math.sin(((elapsed - style.delay) / style.duration) * Math.PI) + 1) / 2;
        const yOffset = progress * style.dy;

        return {
          x: [0, 40, 20][i], // Adjusted: 20 for third triangle
          y: [40, 80, 120][i] + yOffset,
        };
      });

      setPositions(newPositions);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [floatStyles]);

  return (
    <svg
      className="logo"
      width="160"
      height="200"
      viewBox="-10 -21 100 150"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      overflow="visible"
    >
      <defs>
        <linearGradient id="blueFade2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a4ffff" />
          <stop offset="100%" stopColor="#60a4ffff" />
        </linearGradient>
        <linearGradient id="yellowFade2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe420ff" />
          <stop offset="100%" stopColor="#ffa460ff" />
        </linearGradient>
        <linearGradient id="greenFade2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#24ff20ff" />
          <stop offset="100%" stopColor="#24ff20ff" />
        </linearGradient>
        <linearGradient id="whiteFade2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#efffffff" />
          <stop offset="100%" stopColor="#efffffff" />
        </linearGradient>
      </defs>

      {/* Connecting lines */}
      <line x1={positions[0].x} y1={positions[0].y} x2="40" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1={positions[1].x} y1={positions[1].y} x2="40" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1={positions[2].x} y1={positions[2].y} x2="40" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

      {/* Floating triangles */}
      <polygon
        points={`
          ${positions[0].x},${positions[0].y - 40}
          ${positions[0].x + 40},${positions[0].y - 20}
          ${positions[0].x},${positions[0].y}
        `}
        fill="url(#blueFade2)"
        style={{ filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.7))' }}
      />

      <polygon
        points={`
          ${positions[1].x},${positions[1].y - 40}
          ${positions[1].x + 40},${positions[1].y - 20}
          ${positions[1].x},${positions[1].y}
        `}
        fill="url(#whiteFade2)"
        style={{ filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.7))' }}
      />

      <polygon
        points={`
          ${positions[2].x},${positions[2].y - 40}
          ${positions[2].x + 40},${positions[2].y - 20}
          ${positions[2].x},${positions[2].y}
        `}
        fill="url(#greenFade2)"
        style={{ filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.7))' }}
      />

      {/* Grounded triangle (flat base) */}
      <polygon points="40,120 80,140 40,140 0,140" fill="url(#yellowFade2)" />
    </svg>
  );
}

export default Logo;

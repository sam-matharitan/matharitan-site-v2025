// src/App.jsx
import React, { useEffect, useRef } from 'react';
import './App.css';
import Logo from './Logo';

function App() {
  const speckContainer = useRef(null);

  useEffect(() => {
    const container = speckContainer.current;
    const speckCount = 50;

    for (let i = 0; i < speckCount; i++) {
      const speck = document.createElement('div');
      speck.className = 'speck';
      speck.style.left = `${Math.random() * 100}vw`;
      speck.style.top = `${Math.random() * (i+1)*10}vh`;
      speck.style.animationDuration = `${60 + Math.random() * 30}s`;
      speck.style.animationDelay = `0s`;
      const size = 4 + Math.random() * 1;
      speck.style.width = `${size}px`;
      speck.style.height = `${size}px`;
      container.appendChild(speck);
    }
  }, []);

  const carLaneRef = useRef(null);

  useEffect(() => {
    const lane = carLaneRef.current;
    const carCount = 8;

    const colors = ['#60c4ff', '#ffa460', '#24ff20', '#ffffff', '#ff4081'];

    for (let i = 0; i < carCount; i++) {
      const car = document.createElement('div');
      car.className = 'car';
      car.style.left = `${-10 - Math.random() * 150}px`;
      car.style.animationDuration = `${8 + Math.random() * 10}s`;
      car.style.animationDelay = `${Math.random() * 0}s`;
      car.style.setProperty('--car-color', colors[i % colors.length]);
      lane.appendChild(car);
    }
  }, []);

  return (
    <div className="app">
      <div className="numinous-bg"></div>
      <div className="specks" ref={speckContainer}></div>

      <div className="fixed-header">
        <div className="logo-and-title">
          <Logo />
          <div className="header-text">
            <h1>
              The Matharitan Group
              <span className="llc">LLC</span>
            </h1>
          </div>
        </div>
        <div className="car-lane" ref={carLaneRef}></div>
      </div>

      <main className="main-content">
        
      </main>
    </div>
  );
}

export default App;

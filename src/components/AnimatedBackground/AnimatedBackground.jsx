// src/components/AnimatedBackground/AnimatedBackground.js
import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="animated-background__blob animated-background__blob--1"></div>
      <div className="animated-background__blob animated-background__blob--2"></div>
      <div className="animated-background__blob animated-background__blob--3"></div>
    </div>
  );
};

export default AnimatedBackground;
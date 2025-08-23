// src/components/TechStack/TechCard.js
import React from 'react';
import './TechCard.css';

const TechCard = ({ name, icon, description, index }) => {
  return (
    <div 
      className="tech-card"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="tech-card__icon">{icon}</div>
      <h3 className="tech-card__name">{name}</h3>
      <p className="tech-card__description">{description}</p>
    </div>
  );
};

export default TechCard;
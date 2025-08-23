import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description, gradient, index, isVisible }) => {
  return (
    <div 
      className={`feature-card ${isVisible ? 'feature-card--visible' : ''}`}
      data-index={index}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`feature-card__icon feature-card__icon--${gradient}`}>
        {icon}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
};

export default FeatureCard;
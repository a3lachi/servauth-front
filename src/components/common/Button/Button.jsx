// src/components/common/Button/Button.js
import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  href, 
  icon, 
  iconPosition = 'left',
  className = '',
  ...props 
}) => {
  const buttonClass = `button button--${variant} button--${size} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="button__icon button__icon--left">{icon}</span>}
      <span className="button__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="button__icon button__icon--right">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
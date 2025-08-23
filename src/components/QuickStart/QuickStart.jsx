
// src/components/QuickStart/StepCard.js
import React, { useState } from 'react';
import './StepCard.css';
import { CopyIcon, CheckIcon } from '../common/Icons/Icons';

const StepCard = ({ step, title, command, index }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="step-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="step-card__number">{step}</div>
      <div className="step-card__content">
        <h3 className="step-card__title">{title}</h3>
        <div className="step-card__command-container">
          <pre className="step-card__command">{command}</pre>
          <button
            onClick={copyToClipboard}
            className="step-card__copy"
            aria-label="Copy command"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
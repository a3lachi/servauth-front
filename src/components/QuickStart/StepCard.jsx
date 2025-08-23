// src/components/QuickStart/QuickStart.js
import React from 'react';
import './QuickStart.css';
import StepCard from './StepCard';
import GradientText from '../common/GradientText/GradientText';

const QuickStart = () => {
  const steps = [
    { 
      step: 1, 
      title: "Clone the repository", 
      command: "git clone https://github.com/yourusername/auth-server.git\ncd auth-server" 
    },
    { 
      step: 2, 
      title: "Install dependencies", 
      command: "bun install" 
    },
    { 
      step: 3, 
      title: "Set up environment", 
      command: "cp .env.example .env\n# Edit .env with your configuration" 
    },
    { 
      step: 4, 
      title: "Run with Docker", 
      command: "docker-compose up -d" 
    },
    { 
      step: 5, 
      title: "Access your server", 
      command: "curl http://localhost:3000/health" 
    }
  ];

  return (
    <section id="quickstart" className="quickstart section">
      <div className="container">
        <div className="quickstart__header">
          <h2 className="quickstart__title">
            <GradientText variant="secondary" as="span">
              Quick Start
            </GradientText>
          </h2>
          <p className="quickstart__subtitle">Deploy your auth server in minutes</p>
        </div>

        <div className="quickstart__steps">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step.step}
              title={step.title}
              command={step.command}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;

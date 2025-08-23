// src/components/Hero/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';
import Button from '../common/Button/Button';
import GradientText from '../common/GradientText/GradientText';
import { SparklesIcon, TerminalIcon, GlobeIcon, ArrowRightIcon } from '../common/Icons/Icons';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('git clone https://github.com/yourusername/auth-server.git');
    alert('Command copied to clipboard!');
  };

  return (
    <section className="hero section">
      <div className="container">
        <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
          <div className="hero__badge">
            <SparklesIcon className="hero__badge-icon" />
            <span>Production-Ready Authentication</span>
          </div>

          <h1 className="hero__title">
            <GradientText variant="blue-purple" as="span">
              Lightning Fast
            </GradientText>
            <br />
            Authentication Server
          </h1>

          <p className="hero__description">
            High-performance authentication infrastructure built with Bun, Hono, Better-Auth & Drizzle ORM. 
            Deploy in minutes with Docker and scale to thousands of users.
          </p>

          <div className="hero__actions">
            <Button
              variant="primary"
              size="large"
              onClick={copyToClipboard}
              icon={<TerminalIcon />}
              iconPosition="left"
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              size="large"
              href="#demo"
              icon={<GlobeIcon />}
              iconPosition="left"
            >
              View Demo
            </Button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
                <div className="hero__stat-value">
                <GradientText variant="secondary">&lt;200ms</GradientText>
                </div>
                <div className="hero__stat-label">Response Time</div>
            </div>

            <div className="hero__stat">
                <div className="hero__stat-value">
                <GradientText variant="accent">10k+</GradientText>
                </div>
                <div className="hero__stat-label">Concurrent Users</div>
            </div>

            <div className="hero__stat">
                <div className="hero__stat-value">
                <GradientText variant="purple-pink">5 min</GradientText>
                </div>
                <div className="hero__stat-label">Setup Time</div>
            </div>

            {/* New stat */}
            <div className="hero__stat">
                <div className="hero__stat-value">
                <GradientText >20+</GradientText>
                </div>
                <div className="hero__stat-label">APIs Supported</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
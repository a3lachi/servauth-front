// src/components/Navigation/Navigation.js
import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { ShieldIcon, GithubIcon } from '../common/Icons/Icons';
import Button from '../common/Button/Button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container container">
        <div
            className="navigation__logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: "pointer" }}
            >
            <ShieldIcon className="navigation__logo-icon" />
            <span className="navigation__logo-text">ServAuth</span>
        </div>

        <div className={`navigation__menu ${isMobileMenuOpen ? 'navigation__menu--open' : ''}`}>
          <a href="#features" className="navigation__link">Features</a>
          <a href="#api" className="navigation__link">API</a>
          <a href="#quickstart" className="navigation__link">Quick Start</a>
          <Button
            variant="secondary"
            size="small"
             target="_blank"
            href="https://github.com/a3lachi/servauth"
            icon={<GithubIcon className="button-icon" />}
          >
            GitHub
          </Button>
        </div>

        <button 
          className="navigation__toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="navigation__toggle-bar"></span>
          <span className="navigation__toggle-bar"></span>
          <span className="navigation__toggle-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { ShieldIcon } from '../common/Icons/Icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <ShieldIcon className="footer__logo" />
            <span className="footer__name">ServAuth</span>
          </div>
          <div className="footer__text">
            Built with ❤️ using Bun, Hono, Better-Auth & Drizzle
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
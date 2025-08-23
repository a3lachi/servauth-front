// src/components/CTA/CTA.js
import React from 'react';
import './CTA.css';
import Button from '../common/Button/Button';
import { GithubIcon, FileCodeIcon, ExternalLinkIcon } from '../common/Icons/Icons';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__box">
          <h2 className="cta__title">Ready to Build?</h2>
          <p className="cta__description">
            Start building secure authentication in minutes
          </p>
          <div className="cta__actions">
            <Button
              variant="primary"
              size="large"
              href="https://github.com/yourusername/auth-server"
              icon={<GithubIcon />}
              iconPosition="left"
            >
              View on GitHub
              <ExternalLinkIcon className="cta__external-icon" />
            </Button>
            <Button
              variant="secondary"
              size="large"
              href="/docs"
              icon={<FileCodeIcon />}
              iconPosition="left"
            >
              Read Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
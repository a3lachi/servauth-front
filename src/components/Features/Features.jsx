// src/components/Features/Features.js
import React, { useEffect, useRef, useState } from 'react';
import './Features.css';
import FeatureCard from './FeatureCard';
import GradientText from '../common/GradientText/GradientText';
import { ZapIcon, ShieldIcon, DatabaseIcon, LayersIcon, TimerIcon, UsersIcon } from '../common/Icons/Icons';

const Features = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <ZapIcon />,
      title: "Lightning Fast",
      description: "Built on Bun runtime for maximum performance with <200ms response times",
      gradient: "yellow-orange"
    },
    {
      icon: <ShieldIcon />,
      title: "Enterprise Security",
      description: "Industry-standard authentication with Better-Auth, Argon2 hashing, and CSRF protection",
      gradient: "blue-purple"
    },
    {
      icon: <DatabaseIcon />,
      title: "Type-Safe Database",
      description: "Drizzle ORM with PostgreSQL for type-safe queries and migrations",
      gradient: "green-teal"
    },
    {
      icon: <LayersIcon />,
      title: "Docker Ready",
      description: "Containerized with Docker for easy deployment and scaling",
      gradient: "purple-pink"
    },
    {
      icon: <TimerIcon />,
      title: "Session Management",
      description: "Secure session handling with refresh tokens and automatic expiry",
      gradient: "red-rose"
    },
    {
      icon: <UsersIcon />,
      title: "User Management",
      description: "Complete CRUD operations for user profiles with validation",
      gradient: "indigo-blue"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features section" ref={sectionRef}>
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">
            <GradientText variant="primary" as="span">
              Powerful Features
            </GradientText>
          </h2>
          <p className="features__subtitle">Everything you need for modern authentication</p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              isVisible={visibleCards.has(String(index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

// src/components/Features/FeatureCard.js

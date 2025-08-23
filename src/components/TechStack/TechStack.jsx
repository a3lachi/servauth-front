// src/components/TechStack/TechStack.js
import React from 'react';
import './TechStack.css';
import TechCard from './TechCard';
import GradientText from '../common/GradientText/GradientText';

const TechStack = () => {
  const technologies = [
    { name: "Bun", icon: "🚀", description: "JavaScript runtime" },
    { name: "Hono", icon: "⚡", description: "Web framework" },
    { name: "Better-Auth", icon: "🔐", description: "Authentication" },
    { name: "Drizzle ORM", icon: "💧", description: "Database ORM" },
    { name: "PostgreSQL", icon: "🐘", description: "Database" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "TypeScript", icon: "📘", description: "Type safety" },
    { name: "Zod", icon: "✅", description: "Validation" }
  ];

  return (
    <section className="tech-stack section">
      <div className="container">
        <div className="tech-stack__header">
          <h2 className="tech-stack__title">
            <GradientText variant="secondary" as="span">
              Modern Tech Stack
            </GradientText>
          </h2>
          <p className="tech-stack__subtitle">Built with cutting-edge technologies</p>
        </div>

        <div className="tech-stack__grid">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              name={tech.name}
              icon={tech.icon}
              description={tech.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;


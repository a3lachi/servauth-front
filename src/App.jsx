// src/App.js
import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import TechStack from './components/TechStack/TechStack';
import ApiEndpoints from './components/ApiEndpoints/ApiEndpoints';
import CodeExamples from './components/CodeExamples/CodeExamples';
import QuickStart from './components/QuickStart/QuickStart';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Navigation />
      <main className="main-content">
        <Hero />
        <Features />
        <TechStack />
        <ApiEndpoints />
        <CodeExamples />
        <QuickStart />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
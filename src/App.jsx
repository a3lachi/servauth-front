// src/App.js
import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Set tab title
    document.title = "ServAuth - Authentication Server";

    // Set favicon
    const link =
      document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '/servauth.png'; // Put your favicon in public/favicon.ico
    document.getElementsByTagName('head')[0].appendChild(link);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="app">
      <AnimatedBackground />
      <Navigation />
      <main className="main-content">
        <Hero />
        <Features />
        <TechStack />
        <ApiEndpoints />
        <QuickStart />
        <CodeExamples />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

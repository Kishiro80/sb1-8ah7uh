import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solution from './components/Solution';
import Feedback from './components/Feedback';
import CallToAction from './components/CallToAction';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <Solution />
        <Feedback />
        <CallToAction />
        <About />
      </div>
    </div>
  );
}

export default App;
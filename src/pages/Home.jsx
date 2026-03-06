import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Goals from '../components/Goals';
import Packages from '../components/Packages';
import Addons from '../components/Addons';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutMe />
      <Goals />
      <Packages />
      <Addons />
      <Portfolio />
      <Contact />
    </div>
  );
}
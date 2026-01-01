
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Facilities />
        <Schedule />
        <Pricing />
        <Testimonials />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default App;

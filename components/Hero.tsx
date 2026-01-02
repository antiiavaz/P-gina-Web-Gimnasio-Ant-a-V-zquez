import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gym background" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wider leading-tight" style={{ textShadow: '0 0 15px rgba(148, 213, 0, 0.7)' }}>
          énergie <span className="text-brand-green">Fitness</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-gray-300">
          En énergie Fitness, encontrarás la motivación, el equipamiento y el apoyo que necesitas para alcanzar tus metas. Where you belong...
        </p>
        <a href="#pricing" className="mt-10 inline-block bg-brand-green text-black font-bold py-4 px-10 text-lg rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg shadow-brand-green/30">
          Únete Ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;
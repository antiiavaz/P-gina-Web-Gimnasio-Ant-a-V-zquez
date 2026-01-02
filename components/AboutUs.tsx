import React from 'react';

// Fix: Replaced JSX.Element with React.ReactNode to resolve namespace error.
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 p-6 rounded-lg text-center border border-gray-700 hover:border-brand-green hover:scale-105 transition-all duration-300">
    <div className="flex justify-center items-center mb-4 text-brand-green">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0118 18c-1 .5-1.872 1.254-2.5 2C13 18 11 16.09 10 14c2-.5 5-2.986 7-5.014C19 7 18.223 5.91 17.657 4.343" /></svg>,
      title: 'Equipamiento de Vanguardia',
      description: 'Disponemos de la última tecnología en máquinas de fitness para garantizar los mejores resultados.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'Entrenadores Expertos',
      description: 'Nuestro equipo de profesionales certificados te guiará y motivará en cada paso de tu camino.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" /></svg>,
      title: 'Comunidad Inclusiva',
      description: 'Más que un gimnasio, somos una familia. Un ambiente positivo donde todos se sienten bienvenidos.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">¿Qué nos hace <span className="text-brand-green">diferentes</span>?</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          En énergie Fitness, creemos que el fitness es un viaje, no un destino. Por eso, hemos creado un espacio que va más allá de las pesas y las cintas de correr.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

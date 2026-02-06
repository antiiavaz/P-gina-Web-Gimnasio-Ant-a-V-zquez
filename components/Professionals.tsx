import React from 'react';
import type { Professional } from '../types';

const professionalsData: Professional[] = [
  {
    name: 'Javier "Javi" Gómez',
    role: 'Entrenador Principal y Experto en CrossFit',
    description: 'Licenciado en Ciencias de la Actividad Física y del Deporte, Javi cuenta con certificaciones Nivel 3 de CrossFit. Su pasión es llevar a nuestros socios más allá de sus límites con entrenamientos intensos y seguros.',
    imageUrl: 'https://images.pexels.com/photos/12890816/pexels-photo-12890816.jpeg',
  },
  {
    name: 'Elena Ríos',
    role: 'Instructora de Yoga y Pilates',
    description: 'Con más de 10 años de experiencia, Elena es nuestra experta en bienestar de cuerpo y mente. Certificada en Hatha Yoga y Stott Pilates, sus clases se centran en la conexión, la fuerza del core y la flexibilidad.',
    imageUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Marcos Vega',
    role: 'Nutricionista y Entrenador Personal',
    description: 'Graduado en Nutrición Humana y Dietética y con un Máster en Biomecánica, Marcos diseña planes de entrenamiento y nutrición personalizados para que alcances tus objetivos de forma eficiente y saludable.',
    imageUrl: 'https://images.pexels.com/photos/6550853/pexels-photo-6550853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Professionals: React.FC = () => {
  return (
    <section id="professionals" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Nuestros <span className="text-brand-green">Profesionales</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Un equipo de expertos apasionados por el fitness, dedicados a ayudarte a alcanzar tus metas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {professionalsData.map((pro, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-brand-green hover:shadow-2xl hover:shadow-brand-green/10 transition-all duration-300 transform hover:-translate-y-2">
              <img src={pro.imageUrl} alt={pro.name} className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{pro.name}</h3>
                <p className="text-md font-semibold text-brand-green mb-3">{pro.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{pro.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;